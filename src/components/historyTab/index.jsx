import React from 'react';
import { Container } from './styles/historyTab';

export default function HistoryTab({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}