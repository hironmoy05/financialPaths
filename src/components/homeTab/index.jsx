import React from 'react';
import { Item, Inner, Container, DashboarTitle } from './styles/homeTab';

export default function HomeTab({children, ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
}

HomeTab.Container = function HomeTabContainer({children, ...restProps}) {
    return <Container>{children}</Container>
}

HomeTab.DashboarTitle = function HomeTabDashboardTitle({children, ...restProps}) {
    return <DashboarTitle {...restProps}>{children}</DashboarTitle>
}