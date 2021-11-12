import React from 'react';
import { Item, Inner, Container } from './styles/homeTab';

export default function HomeTab({children, ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

HomeTab.Container = function HomeTabContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}