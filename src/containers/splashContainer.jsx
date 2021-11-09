import React from 'react';
import { Splash } from '../components';
import FinpathLogo from '../assets/finpath_logo.svg';
import {Text} from 'react-native'

export const SplashContainer = () => {
    return (
        <Splash>
            <Splash.Container>
                <Splash.LogoBox>
                    <FinpathLogo />
                </Splash.LogoBox>
            </Splash.Container>
        </Splash>
    )
}