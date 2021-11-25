import React from 'react';
import { BuyScreen } from '..';
import { SellScreen } from '..';
import { TransferScreen } from '..';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
        <>
        <View style={styles.historyContainer}>
            <Tab.Navigator>
                <Tab.Screen name="Buy" component={BuyScreen} />
                <Tab.Screen name="Sell" component={SellScreen} />
                <Tab.Screen name="Transfer" component={TransferScreen} />
            </Tab.Navigator>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#013567',
    },

    historyContainer: {
        flex: 1,
    }
})