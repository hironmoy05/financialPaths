import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, HomeScreen, LoginScreen, RegisterationScreen, CryptoBalanceScreen, BuyCoinScreen } from '..';
import SwiperContainer from '../containers/swiperContainer';
import { DrawerNavigator } from '..'

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Splash' 
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
          name='Drawer'
          component={DrawerNavigator}
        />
        <Stack.Screen 
          name='Swiper'
          component={SwiperContainer}
        />
        <Stack.Screen 
          name='CryptoBalance'
          component={CryptoBalanceScreen}
        />
        {/* <Stack.Screen 
          name='BuyCoin'
          component={BuyCoinScreen}
        /> */}
      </Stack.Navigator> 
    )
}