import React from 'react';
import { HomeTab } from '../components';
import { PorfolioTab } from '../components';
import { Text } from 'react-native';

export const PortfolioTabContainer = () => {
    return (
        <HomeTab>
            <PorfolioTab>
                <Text>Hello from Portfolio</Text>
            </PorfolioTab>
        </HomeTab>
    )
}