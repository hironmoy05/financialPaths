import React from 'react';
import { Home } from '../components';
import FinpathLogo from '../assets/finpath_logo.svg';

export const HomeContainer = ({navigation}) => {
    return (
        <Home>
            <Home.Container>
                <Home.LogoBox>
                    <FinpathLogo />
                </Home.LogoBox>
                
                <Home.Frame>
                    <Home.Title>Welcome</Home.Title>
                    <Home.SubTitle>Global Social Payments Application for cryptocurrencies Payments</Home.SubTitle>
                </Home.Frame>
                <Home.RegularButton mode='contained' onPress={() => navigation.navigate('Login')}>
                    <Home.ButtonText>Login</Home.ButtonText>
                </Home.RegularButton>
            </Home.Container>
        </Home>
    )
}