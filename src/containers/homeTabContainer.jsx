import React from 'react';
import { HomeTab } from '../components';
import { CardContainer } from './cardContainer';
import { ListItemsContainer } from './listItemsContainer';
import { screenSizeTwo } from '../responsive';


export const HomeTabContainer = () => {
    return (
        <HomeTab>
            <HomeTab.Inner>
            <HomeTab.Container>
                <CardContainer />
            </HomeTab.Container>
            </HomeTab.Inner>

            <HomeTab.ListContainer screenSizeTwo={screenSizeTwo()}>
                <ListItemsContainer />
            </HomeTab.ListContainer>
        </HomeTab>
    )
}