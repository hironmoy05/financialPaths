/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Fragment } from 'react';
 import { StatusBar } from 'react-native';
 import { SplashScreen } from './src';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
 
   return (
     <Fragment>
       <NavigationContainer>
         <Stack.Navigator 
           initialRouteName='Splash' 
           screenOptions={{header: () => null}}>
           <Stack.Screen
             name='Splash'
             component={SplashScreen}
           />
         </Stack.Navigator> 
       </NavigationContainer>
     </Fragment>
   ); 
 };
 
 export default App;
 
 
