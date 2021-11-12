import React from 'react';
import { HomeTab } from '../components';
import { HistoryTab } from '../components';
import { Text } from 'react-native';

export const HistoryTabContainer = () => {
    return (
        <HomeTab>
            <HistoryTab>
                <Text>Hello from History</Text>
            </HistoryTab>
        </HomeTab>
    )
}