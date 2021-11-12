import React from 'react';
import { Container } from './styles/portfolioTab';

export default function PortfolioTab({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}