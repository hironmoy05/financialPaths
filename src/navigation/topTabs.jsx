import React from 'react';
import { BuyScreen } from '..';
import { SellScreen } from '..';
import { TransferScreen } from '..';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.historyText}>History</Text>
        </View>
        <View style={styles.historyTabContainer}>
            <Tab.Navigator>
                <Tab.Screen name="Buy" component={BuyScreen} />
                <Tab.Screen name="Sell" component={SellScreen} />
                <Tab.Screen name="Transfer" component={TransferScreen} />
            </Tab.Navigator>
        </View>
        </>
    )
}

function SettingsScreen() {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#013567',
    },

    historyTabContainer: {
        flex: 1,
    },

    historyText: {
        fontSize: 18,
        color: '#fff',
        paddingTop: 20,
        paddingBottom: 10,
        textAlign: 'center'
    }
})