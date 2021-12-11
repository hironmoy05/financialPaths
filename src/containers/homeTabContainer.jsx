import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeTab } from '../components';
import { CardContainer } from './cardContainer';
import { ListItemsContainer } from './listItemsContainer';
import { screenSizeTwo } from '../responsive';


export const HomeTabContainer = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
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
        </SafeAreaView>
    )
}