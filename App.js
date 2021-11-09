/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

<<<<<<< HEAD
import React, { Fragment } from 'react';
import { StatusBar, Text } from 'react-native';

const App = () => {

  return (
    <Fragment>
      <Text>Hello from react native</Text>
    </Fragment>
  ); 
};

export default App;

=======
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
           initialRouteName='Home' 
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
 
 
>>>>>>> hironmoy.dhar_feature_01
