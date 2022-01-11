import * as React from 'react';
import {useEffect, useState} from 'react';
import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import { TabsCotainer } from '../containers/tabsContainer';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { loadBugs, getUserIdFromStore } from '../store/bugs';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../containers/loaderContainer';
import RNRestart from 'react-native-restart';
import { deviceWidth } from '../responsive';

const Stack = createNativeStackNavigator();

const NavigationDrawerStructure = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const id = useSelector(getUserIdFromStore);
  console.log('drawerNavigator', id)

  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  
  useEffect(() => {
    setLoading(true);
    dispatch(loadBugs(id));
    setLoading(false)
  }, [])

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Hamburger Button Image */}
        <Image
          source={require('../assets/icons/menu.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>

      {console.log(Math.floor(deviceWidth)+'px')}
        
      <Pressable style={{position: 'absolute', top: 5, left: Math.floor(deviceWidth - 60)}} onPress={() => RNRestart.Restart()}>
        <Image source={require('../assets/loop2.png')} />
      </Pressable>
      
    </View>
  );
};
const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'HomeTabScreen':
      return 'Dashboard';
    case 'PortfolioTabScreen':
      return 'Porfolio';
    case 'HistoryTabScreen':
      return 'History';
    case 'NotificationTabScreen':
      return 'Notification';
    case 'HomeScreenStack':
      return 'Login';
  }
};


// bottom Stack
const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeTabScreen">
      <Stack.Screen
        name='Dashboard'
        component={TabsCotainer}
        options={({route}) => ({
          title: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#013567', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

import { DrawerContent } from './drawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      itemStyle: {marginVertical: 5, width: 90},
      drawerStyle: {width: 78+'%'}
    }}
    >
    <Drawer.Screen
      name="HomeScreenStack"
      options={{drawerLabel: 'Home'}}
      component={HomeScreenStack}
    />
  </Drawer.Navigator>
  );
}