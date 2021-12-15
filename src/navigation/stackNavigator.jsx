import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, HomeScreen, LoginScreen, RegisterationScreen, CryptoBalanceScreen, BuyCoinScreen, SellCoinScreen, SendCoinScreen, SendCoinScreen2, ReceiveCoinScreen, ProfileScreen, ProfileScreen2, KycVerificationScreen, GiftCardScreen, SettingsScreen } from '..';
import SwiperContainer from '../containers/swiperContainer';
import { DrawerNavigator } from '..';

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
        <Stack.Screen 
          name='BuyCoin'
          component={BuyCoinScreen}
        />
        <Stack.Screen 
          name='SellCoin'
          component={SellCoinScreen}
        />
        <Stack.Screen 
          name='SendCoin'
          component={SendCoinScreen}
        />
        <Stack.Screen 
          name='SendCoin2'
          component={SendCoinScreen2}
        />
        <Stack.Screen 
          name='ReceiveCoin'
          component={ReceiveCoinScreen}
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen 
          name='Profile2'
          component={ProfileScreen2}
        />
        <Stack.Screen 
          name='KycVerification'
          component={KycVerificationScreen}
        />
        <Stack.Screen 
          name='GiftCard'
          component={GiftCardScreen}
        />
        <Stack.Screen 
          name='Settings'
          component={SettingsScreen}
        />
      </Stack.Navigator> 
    )
}