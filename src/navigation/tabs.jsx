import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HomeTabScreen, PortfolioTabScreen, HistoryTabScreen, NotificationTabScreen } from '..';
// import { TabIcon } from '../components';
// import icons from '../constants/icons';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { position: 'absolute', backgroundColor: '#013567', borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                minHeight: 80,
                paddingTop: 20,
                paddingBottom: 15,
                paddingLeft: 20,
                paddingRight: 20
            },
            tabBarLabelStyle:{fontSize: 13, fontFamily: 'Open Sans Bold'}
            }}    
        >
            <Tab.Screen
                name='Home'
                component={HomeTabScreen}
                options= {{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused, size, color}) => (
                        <Image source={ focused ? require('../assets/icons/home_selected.png') : require('../assets/icons/home_1.png')}
                        style={{
                            width: size,
                            height: size,
                            // backgroundColor: `${focused ? '#013567' : '#fff'}`,
                        }}    
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Porfolio'
                component={PortfolioTabScreen}
                options= {{
                    tabBarLabel: 'Porfolio',
                    tabBarIcon: ({focused, size, color}) => (
                        <Image source={ focused ? require('../assets/icons/portfolio_selected.png') : require('../assets/icons/portfolio.png')}
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: `${focused ? '#fff' : '#013567'}`
                        }}    
                        />
                    )
                }}

            />
            <Tab.Screen
                name='History'
                component={HistoryTabScreen}
                options= {{
                    tabBarLabel: 'History',
                    tabBarIcon: ({focused, size, color}) => (
                        <Image source={ focused ? require('../assets/icons/history_selected.png') : require('../assets/icons/history.png')}
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: `${focused ? '#fff' : '#013567'}`
                        }}    
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Notification'
                component={NotificationTabScreen}
                options= {{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({focused, size, color}) => (
                        <Image source={ focused ? require('../assets/icons/notification_selected.png') : require('../assets/icons/notification.png')}
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: `${focused ? '#fff' : '#013567'}`
                        }}    
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}