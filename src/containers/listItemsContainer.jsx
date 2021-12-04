import React from 'react';
import {ListItems} from '../components';
import BitCoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/ethereum.svg';
import LiteCoin from '../assets/litecoin.svg';
import Ripple from '../assets/ripple.svg';
import Dash from '../assets/dash.svg';
import EthereumClassic from '../assets/ethereum_classic.svg';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { deviceHeight, screenSizeTwo } from '../responsive';

export const ListItemsContainer = () => {
    const DATA = [
        {coin: <BitCoin />, id: '0', title: 'BitCoin', subTitle: 'BTC', price: '64,240.05', percentage: '2.84'},
        {coin: <Ethereum />, id: '1', title: 'Ethereum', subTitle: 'BTC', price: '11,240.05', percentage: '1.24'},
        {coin: <LiteCoin />, id: '2', title: 'LiteCoin', subTitle: 'BTC', price: '23,240.05', percentage: '0.84'},
        {coin: <Ripple />, id: '3', title: 'Ripple', subTitle: 'BTC', price: '4,240.05', percentage: '1.14'},
        {coin: <Dash />, id: '4', title: 'Dash', subTitle: 'BTC', price: '4,240.05', percentage: '1.14'},
        {coin: <EthereumClassic />, id: '5', title: 'Ethereum Classic', subTitle: 'BTC', price: '4,240.05', percentage: '1.14'},
    ]

    const listHeight = `${deviceHeight / 2}px`;

    return (
        <ListItems>
            <FlatList
                data={DATA}
                renderItem={({item, index}) => (
                    <>
                        <ListItems.ItemWrapper key={item.id}>
                            <ListItems.LeftWrapper>
                                <View>{item.coin}</View>
                                <ListItems.TitleWrapper>
                                    <ListItems.ListTitle>{item.title}</ListItems.ListTitle>
                                    <ListItems.ListSubTitle>{item.subTitle}</ListItems.ListSubTitle>
                                </ListItems.TitleWrapper>
                            </ListItems.LeftWrapper>
            
                            <ListItems.RightWrapper>
                                <ListItems.ListPrice><Text style={{color: '#013567'}}>${item.price}</Text></ListItems.ListPrice>
                                <ListItems.ListPercent><Text style={{color: '#1DDB5C'}}>+{item.percentage}%</Text></ListItems.ListPercent>
                            </ListItems.RightWrapper>
                        </ListItems.ItemWrapper>
                        <View style={styles.divider} />
                    </>
                )}
                keyExtractor={item => item.id}
            />
        </ListItems>
    )
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#D2D2D2',
        height: 2,
        width: '90%',
        alignSelf: 'center'
    }
})