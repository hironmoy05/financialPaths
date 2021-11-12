/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Tabs } from './src/navigation/tabs';
import { SplashScreen, HomeScreen, LoginScreen, RegisterationScreen } from './src';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();
 
 const App = () => {
 
   return (
     <Fragment>
       <NavigationContainer>
         <Stack.Navigator 
           initialRouteName='Home' 
           screenOptions={{header: () => null}}>
           <Stack.Screen
             name='Splash'
             component={SplashScreen}
           />
           <Stack.Screen
             name='Home'
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
         </Stack.Navigator> 
       </NavigationContainer>
       <StatusBar style='auto' />
     </Fragment>
   ); 
 };
 
 export default App;
 
 
