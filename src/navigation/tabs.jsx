import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HomeTabScreen, PortfolioTabScreen, HistoryTabScreen, NotificationTabScreen } from '..';
// import { TabIcon } from '../components';
// import icons from '../constants/icons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { position: 'absolute', backgroundColor: '#013567', borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                minHeight: 70,
                paddingTop: 10,
                paddingBottom: 10,
            },
            tabBarLabelStyle:{fontSize: 13, fontFamily: 'Open Sans Bold'}
            }}
            
        >
            <Tab.Screen
                name='Home'
                component={HomeTabScreen}
                
            />
            <Tab.Screen
                name='Porfolio'
                component={PortfolioTabScreen}
            />
            <Tab.Screen
                name='History'
                component={HistoryTabScreen}
            />
            <Tab.Screen
                name='Notification'
                component={NotificationTabScreen}
            />
        </Tab.Navigator>
    )
}