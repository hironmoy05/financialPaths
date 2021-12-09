import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderBar } from '../components';
import Back from '../assets/back.svg';

export const HeaderBarContainer = (props) => {
    const navigation = useNavigation();
    let Header;

    if (props.headerTitle === 'Buy Coin') {
        Header = 'Buy Coin';
    } else {
        Header = 'Bitcoin Balance'
    }

    return (
        <HeaderBar buyContainer={props.buyContainer}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Back />
            </Pressable>
            <HeaderBar.Container>
                <HeaderBar.BitCoinTitle>{Header}</HeaderBar.BitCoinTitle>
            </HeaderBar.Container>
        </HeaderBar>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        paddingLeft: '12%',
        top: '65%'
    }
})