import React from 'react';
import { HomeTab } from '../components';
import { CardContainer } from './cardContainer';
import { ListItemsContainer } from './listItemsContainer';

export const HomeTabContainer = () => {
    return (
        <HomeTab>
            <HomeTab.Container>
                <HomeTab.DashboarTitle>Dashboard</HomeTab.DashboarTitle>
                <CardContainer />
            </HomeTab.Container>
            <ListItemsContainer />
        </HomeTab>
    )
}