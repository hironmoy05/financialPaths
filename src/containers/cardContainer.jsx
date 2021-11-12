import React from 'react';
import { Card } from '../components';
import { Deposit } from '../assets/deposit.svg';
import { Withdraw } from '../assets/withdraw.svg';

export const CardContainer = () => {
    return (
        <Card>
            <Card.Container>
                <Card.Circle />
                <Card.Frame>
                    <Card.TextBox>
                        <Card.Frame1>
                            <Card.CardTitle>Available Balance</Card.CardTitle>
                            <Card.Frame2>
                                <Card.CardCoin>2.62565</Card.CardCoin>
                                <Card.CardCoinShort>BTC</Card.CardCoinShort>
                            </Card.Frame2>
                        </Card.Frame1>
                        <Card.Frame2>
                            <Card.CardCurrency>168218.42</Card.CardCurrency>
                            <Card.CardCoinShort>BTC</Card.CardCoinShort>
                        </Card.Frame2>
                    </Card.TextBox>
                    <Card.ButtonBox>
                        <Card.ActionButtonBox>
                        <Card.ActionButton onPress={() => console.log('Deposit pressed')}>
                        <Card.ActionButtonText>Deposit</Card.ActionButtonText>
                        </Card.ActionButton>
                        </Card.ActionButtonBox>
                        <Card.ActionButtonBox>
                            <Card.ActionButton onPress={() => console.log('Withdraw pressed')}>
                                <Card.ActionButtonText>Widthdraw</Card.ActionButtonText>
                            </Card.ActionButton>
                        </Card.ActionButtonBox>
                    </Card.ButtonBox>
                </Card.Frame>
            </Card.Container>
        </Card>
    )
}