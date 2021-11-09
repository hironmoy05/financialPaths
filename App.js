/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Fragment } from 'react';
 import { StatusBar } from 'react-native';
 import { SplashScreen, HomeScreen, LoginScreen } from './src';
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
         </Stack.Navigator> 
       </NavigationContainer>
     </Fragment>
   ); 
 };
 
 export default App;
 
 
