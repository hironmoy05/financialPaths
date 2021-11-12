import React from 'react';
import { HomeTab } from '../components';
import { Text } from 'react-native';

export const HomeTabContainer = () => {
    return (
        <HomeTab>
            <HomeTab.Container>
                <Text>Hello from Home</Text>
            </HomeTab.Container>
        </HomeTab>
    )
}