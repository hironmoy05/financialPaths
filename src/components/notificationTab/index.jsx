import React from 'react';
import { Container } from './styles/notificationTab';

export default function NotificationTab({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}