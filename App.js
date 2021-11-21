/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/stackNavigator';
 
 const App = () => {
 
   return (
     <Fragment>
       <NavigationContainer>
          <StackNavigator />
       </NavigationContainer>
       <StatusBar style='auto' />
     </Fragment>
   ); 
 };
 
 export default App;
 
 
