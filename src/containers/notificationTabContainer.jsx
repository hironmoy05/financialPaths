import React from 'react';
import { HomeTab } from '../components';
import { NotificationTab } from '../components';
import { Text } from 'react-native';

export const NotificationTabContainer = () => {
    return (
        <HomeTab>
            <NotificationTab>
                <Text>Hello from Notification</Text>
            </NotificationTab>
        </HomeTab>
    )
}