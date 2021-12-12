import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {HeaderBarContainer} from './headerBarContainer';
import { CoinInputContainer } from './coinInputContainer';
import { Login } from '../components';
import QrCode from '../assets/qr_code.svg';

export function SendCoinContainer({ navigation }) {
    const buyContainer = {
        'padding-bottom': 5,
        'border-bottom-left-radius': 0,
        'border-bottom-right-radius': 0,
    }

    const sendButton = {
        width: '90%',
        'background-color': '#013567',
        marginLeft: '5%',
        marginBottom: '5%',
        marginTop: 'auto'
    }

    return(
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <HeaderBarContainer headerTitle={'Send Coin'} buyContainer={buyContainer} />
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Send Coin</Text>
                    <Text style={styles.subTitle}>Enter Wallet address or scan QR Code</Text>
                </View>
            </View>
                <CoinInputContainer sendCoin='sendCoin' />
                <View style={{width: '90%', marginLeft: 20}}>
                    <QrCode />
                </View>

                <Login.LoginFormButton sendButton={sendButton} onPress={() => navigation.navigate('SendCoin2')} mode='contained'>Continue</Login.LoginFormButton>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '4%',
        paddingLeft: '4%',
        paddingRight: '4%' 
    },
    title: {
        fontFamily: 'Open Sans Bold',
        color: '#212121',
        fontSize: 28
    },
    subTitle: {
        fontFamily: 'Open Sans Medium',
        color: '#707070'
    }
})