import React from 'react';
import { Item, Inner, Container } from './styles/homeTab';

export default function HomeTab({children, ...restProps}) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

HomeTab.Inner = function HomeTabInner({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>
}

HomeTab.Container = function HomeTabContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
