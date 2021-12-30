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
import { Provider } from 'react-redux';
import {store, persistor} from './src/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
 
   return (
     <Fragment>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StackNavigator />
          </PersistGate>
        </Provider>
      </NavigationContainer>
       <StatusBar style='auto' />
     </Fragment>
   ); 
 };
 
 export default App;
 
 
