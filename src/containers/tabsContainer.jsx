import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabContainer } from './homeTabContainer';
import { PortfolioTabContainer } from './portfolioTabContainer';
import { HistoryTabContainer } from './historyTabContainer';
import { NotificationTabContainer } from './notificationTabContainer';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabsCotainer = () => {
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
                name='HomeTabScreen'
                component={HomeTabContainer}
                options= {{
                    // title: 'Dashboard',
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
                name='PortfolioTabScreen'
                component={PortfolioTabContainer}
                options= {{
                    // title: 'Portfolio',
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
                name='HistoryTabScreen'
                component={HistoryTabContainer}
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
                name='NotificationTabScreen'
                component={NotificationTabContainer}
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
