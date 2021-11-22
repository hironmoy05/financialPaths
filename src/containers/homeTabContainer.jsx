import React from 'react';
import { HomeTab } from '../components';
import { CardContainer } from './cardContainer';
import { ListItemsContainer } from './listItemsContainer';

export const HomeTabContainer = () => {

    return (
        <HomeTab>
            <HomeTab.Inner>
            <HomeTab.Container>
                <CardContainer />
            </HomeTab.Container>

            </HomeTab.Inner>
            <ListItemsContainer />
        </HomeTab>
    )
}