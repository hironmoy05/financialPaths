import React from 'react';
import { HistoryTab } from '../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
            <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
    )
}

function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}