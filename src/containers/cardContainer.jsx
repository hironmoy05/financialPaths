import React from 'react';
import { Card } from '../components';
import Withdraw from '../assets/withdraw.svg';
import Deposit from '../assets/deposit.svg';
import {StyleSheet, View} from 'react-native';
import { calcWidth } from '../responsive';
import {useNavigation} from '@react-navigation/native';

export const CardContainer = () => {
    const navigation = useNavigation();

    const coinFont = {
        'font-size': `${calcWidth(6.8)}px`,
    }

    const coinShortFont = {   
        'margin-bottom': '2.8px',
    }

    return (
        <Card>
            <Card.Container>
                <Card.Circle />
                <Card.Frame>
                    <Card.TextBox>
                        <Card.Frame1>
                            <Card.CardTitle>Available Balance</Card.CardTitle>
                            <Card.Frame2>
                                <Card.CardCoin coinFont={coinFont}>2.62565</Card.CardCoin>
                                <Card.CardCoinShort coinShortFont={coinShortFont}>BTC</Card.CardCoinShort>
                            </Card.Frame2>
                        </Card.Frame1>
                        <Card.Frame2>
                            <Card.CardCurrency>168218.42</Card.CardCurrency>
                            <Card.CardCoinShort>BTC</Card.CardCoinShort>
                        </Card.Frame2>
                    </Card.TextBox>
                    <Card.ButtonBox>
                        <Card.ActionButtonBox>
                            <View style={styles.actionButtonImg}>
                                <Deposit />
                            </View>
                        <Card.ActionButton onPress={() => navigation.navigate('SendCoin')}>
                        <Card.ActionButtonText>Deposit</Card.ActionButtonText>
                        </Card.ActionButton>
                        </Card.ActionButtonBox>
                        <Card.ActionButtonBox>
                            <View style={styles.actionButtonImg}>
                                <Withdraw />
                            </View>
                            <Card.ActionButton onPress={() => navigation.navigate('ReceiveCoin')}>
                                <Card.ActionButtonText>Widthdraw</Card.ActionButtonText>
                            </Card.ActionButton>
                        </Card.ActionButtonBox>
                    </Card.ButtonBox>
                </Card.Frame>
            </Card.Container>
        </Card>
    )
}

const styles = StyleSheet.create({
    actionButtonImg: {
        position: 'absolute',
        left: 0,
        top: 1
    }
})