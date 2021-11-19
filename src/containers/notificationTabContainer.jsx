import React from 'react';
import { NotificationTab } from '../components';
import Ethereum from '../assets/ethereum.svg';
import BitCoin from '../assets/bitcoin.svg';
import Dash from '../assets/dash.svg';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

export const NotificationTabContainer = () => {
    const DATA = [
        {coin: <BitCoin />, id: '0', title: 'Bitcoin cryptocurrency price alerts', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
        {coin: <Ethereum />, id: '1', title: 'Coinwink - Bitcoin BTC Price Alert,', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
        {coin: <BitCoin />, id: '2', title: 'RBI circular', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
        {coin: <BitCoin />, id: '3', title: 'What Is Cryptocurrency in Simple Words?', subTitle: 'Cryptocurrencies are systems that allow for secure payments online which are denominated in terms of virtual "tokens."'},
        {coin: <Dash />, id: '4', title: 'Bitcoin cryptocurrency price alerts', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
    ]
    
    return (
        <>
        <View style={styles.topView}>
            <Text style={styles.topViewText}>Notification</Text>
        </View>
        <NotificationTab>
            <View style={styles.clearBox}>
                <NotificationTab.NotificationTitle>Notification</NotificationTab.NotificationTitle>
                <Pressable onPress={() => console.log('Clear all pressed')}><Text style={styles.clear}>Clear All</Text></Pressable>
            </View>
            <NotificationTab.Container>
                <FlatList 
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        <NotificationTab.Frame key={item.id}>
                                <NotificationTab.NotificationBox>
                                {item.coin}
                                <NotificationTab.NotificationTextBox>
                                    <NotificationTab.NotificationTitle>{item.title}</NotificationTab.NotificationTitle>
                                    <NotificationTab.NotificationSubTitle>{item.subTitle}</NotificationTab.NotificationSubTitle>
                                </NotificationTab.NotificationTextBox>
                                </NotificationTab.NotificationBox>
                                <NotificationTab.NotificationDate>20/10/21 7:40 PM</NotificationTab.NotificationDate>
                        <View style={styles.divider} />
                        </NotificationTab.Frame>
                    )}
                />
            </NotificationTab.Container>  
        </NotificationTab>
        </>
    )
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#D2D2D2',
        height: 2,
        width: '90%',
        alignSelf: 'center'
    },
    topView: {
        backgroundColor: '#013567',
        padding: '5%',
    },
    topViewText: {
        fontFamily: 'Open Sans Bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
    },
    clearBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '5%',
    },
    clear: {
        fontFamily: 'Open Sans Bold',
        fontSize: 15,
        backgroundColor: '#013567',
        paddingTop: '2%',
        paddingBottom: '2%', 
        paddingLeft: '5%',
        paddingRight: '5%',
        color: '#fff'
    }
})