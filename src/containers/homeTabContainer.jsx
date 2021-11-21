import React from 'react';
import { HomeTab } from '../components';
import { CardContainer } from './cardContainer';
import { ListItemsContainer } from './listItemsContainer';
import Menu from '../assets/menu.svg';
import {View, Pressable, Linking} from 'react-native';

export const HomeTabContainer = ({navigation}) => {

    return (
        <HomeTab>
            <HomeTab.Inner>
            <HomeTab.Container>
                <View style={{display: 'flex', backgroundColor:'#013567'}}>
                    {/* <Pressable onPress={() => console.log('pressed')}><Menu /></Pressable> */}
                    <HomeTab.DashboarTitle>Dashboard</HomeTab.DashboarTitle>
                    {/* {navigation.navigate('Drawer')} */}
                </View>
                <CardContainer />
            </HomeTab.Container>

            </HomeTab.Inner>
            <ListItemsContainer />
        </HomeTab>
    )
}