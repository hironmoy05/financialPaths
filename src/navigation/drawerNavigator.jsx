import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Tabs } from './tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Hamburger Button Image */}
        <Image
          source={require('../assets/icons/menu.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
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
      return 'Dashboard';
  }
};


// bottom Stack
const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeTabScreen">
      <Stack.Screen
        name='Dashboard'
        component={Tabs}
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

// const PortfolioScreenStack = ({navigation}) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="PortfolioTabScreen"
//         component={PortfolioTabScreen}
//         options={{
//           title: 'Portfolio', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
// const HistoryScreenStack = ({navigation}) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="HistoryTabScreen"
//         component={HistoryTabScreen}
//         options={{
//           title: 'History', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const NotificationScreenStack = ({navigation}) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#013567', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="NotificationTabScreen"
//         component={NotificationTabScreen}
//         options={{
//           title: 'Notification', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 5},
    }}>
    <Drawer.Screen
      name="HomeScreenStack"
      options={{drawerLabel: 'Home'}}
      component={HomeScreenStack}
    />
  </Drawer.Navigator>
  );
}