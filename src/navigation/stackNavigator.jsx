import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, HomeScreen, LoginScreen, RegisterationScreen } from '..';
import SwiperContainer from '../containers/swiperContainer';
import { Tabs } from '../navigation/tabs';
import { DrawerNavigator } from '..'

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='HomeScreen' 
        screenOptions={{header: () => null}}>
        <Stack.Screen
          name='Splash'
          component={SplashScreen}
        />
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='Registeration'
          component={RegisterationScreen}
        />
        <Stack.Screen
          name='Dashboard'
          component={Tabs}
        />
        {/* <Stack.Screen 
          name='Drawer'
          component={DrawerNavigator}
        /> */}
        <Stack.Screen 
          name='Swiper'
          component={SwiperContainer}
        />
      </Stack.Navigator> 
    )
}