import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { Tabs } from './tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const DrawerScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      // <Drawer.Navigator 
      //   initialRouteName="Dashboard"
      //   >

      //   <Drawer.Screen name='Dashboard'component={Tabs} />
      //   <Drawer.Screen name="Draw" component={DrawerScreen} />
      //   <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      // </Drawer.Navigator>
      <Drawer.Navigator 
        initialRouteName='Dashboard'
        // screenOptions={}
        defaultScreenOptions={{headerBackground: 'transparent',headerBackgroundContainerStyle: '#013567' }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        >
        <Drawer.Screen 
        name='Dashboard' 
        component={Tabs} 
        options={{title: 'Dashboard', drawerActiveBackgroundColor: '#013567'}}
        
        />

      </Drawer.Navigator>
  );
}