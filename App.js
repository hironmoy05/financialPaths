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
import { AppContext } from './src/context/appContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userName = AsyncStorage.getItem('userName');
const userEmail = AsyncStorage.getItem('userEmail');
 
 const App = () => {
 
   return (
     <Fragment>
       <NavigationContainer>
        <AppContext.Provider value={{name: userName, email: userEmail}}>
            <StackNavigator />
        </AppContext.Provider>    
       </NavigationContainer>
       <StatusBar style='auto' />
     </Fragment>
   ); 
 };
 
 export default App;
 
 
