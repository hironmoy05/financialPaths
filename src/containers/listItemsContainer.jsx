import React, { useEffect, useState } from 'react';
import {ListItems} from '../components';
// import BitCoin from '../assets/bitcoin.svg';
// import Ethereum from '../assets/ethereum.svg';
// import LiteCoin from '../assets/litecoin.svg';
// import Ripple from '../assets/ripple.svg';
// import Dash from '../assets/dash.svg';
// import EthereumClassic from '../assets/ethereum_classic.svg';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import { deviceHeight } from '../responsive';
import { getUserIdFromStore } from '../store/bugs';
import { getCoinsDetails, coinsDetails, coinsStatus } from '../store/coinList';
import { useDispatch, useSelector } from 'react-redux';
import { SvgUri } from 'react-native-svg';

export const ListItemsContainer = () => {
    const dispatch = useDispatch();
    const userId = useSelector(getUserIdFromStore);
    const DATA = useSelector(coinsDetails);
    
    
    
    // const DATA = [
        //     {coin: <BitCoin />, id: '0', title: 'BitCoin', subTitle: 'BTC', price: '64,240.05', percentage: '2.84'},
        //     {coin: <Ethereum />, id: '1', title: 'Ethereum', subTitle: 'BTC', price: '11,240.05', percentage: '1.24'},
        //     {coin: <LiteCoin />, id: '2', title: 'LiteCoin', subTitle: 'BTC', price: '23,240.05', percentage: '0.84'},
    //     {coin: <Ripple />, id: '3', title: 'Ripple', subTitle: 'BTC', price: '4,240.05', percentage: '1.14'},
    //     {coin: <Dash />, id: '4', title: 'Dash', subTitle: 'BTC', price: '4,240.05', percentage: '1.14'},
    //     {coin: <EthereumClassic />, id: '5', title: 'Ethereum Classic', subTitle: 'BTC', price: '4,240.05', percentage: '1.14'},
    // ]

    const listHeight = `${deviceHeight / 2}px`;
    
    useEffect(() => {
        dispatch(getCoinsDetails(userId));
    }, [DATA])

    return (
        <ListItems>
            <FlatList
                data={DATA}
                renderItem={({item, index}) => (
                    <>
                        <ListItems.ItemWrapper key={item.id}>
                            <ListItems.LeftWrapper>
                                {/* <View>{item.coin}</View> */}
                                <SvgUri width='30' height= '30' uri={item.icon} />
                                <ListItems.TitleWrapper>
                                    <ListItems.ListTitle>{item.name}</ListItems.ListTitle>
                                    <ListItems.ListSubTitle>{item.code}</ListItems.ListSubTitle>
                                </ListItems.TitleWrapper>
                            </ListItems.LeftWrapper>
            
                            <ListItems.RightWrapper>
                                <ListItems.ListPrice><Text style={{color: '#013567'}}>{item.price}</Text></ListItems.ListPrice>
                                <ListItems.ListPercent><Text style={{color: `${item.change[0] === '-' ? '#FE1D1D' : '#1DDB5C'}`}}>{item.change}%</Text></ListItems.ListPercent>
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