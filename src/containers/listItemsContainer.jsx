import React from 'react';
import {ListItems} from '../components';
import BitCoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/ethereum.svg';
import LiteCoin from '../assets/litecoin.svg';
import Ripple from '../assets/ripple.svg';
import {View, StyleSheet, FlatList} from 'react-native';

export const ListItemsContainer = () => {
    const DATA = [
        {coin: <BitCoin />, id: '0', title: 'BitCoin', subTitle: 'BTC', price: '64,240.05', percentage: '2.84'},
        {coin: <Ethereum />, id: '1', title: 'Ethereum', subTitle: 'BTC', price: '11,240.05', percentage: '1.24'},
        {coin: <LiteCoin />, id: '2', title: 'LiteCoin', subTitle: 'BTC', price: '23,240.05', percentage: '0.84'},
        {coin: <Ripple />, id: '3', title: 'Ripple', subTitle: 'BTC', price: '4,240.05', percentage: '1.14'},
    ]

    return (
        <ListItems>
            <FlatList
                data={DATA}
                renderItem={(item, index) => (
                    <>
                        <ListItems.ItemWrapper key={item.id}>
                            <ListItems.LeftWrapper>
                                {item.coin}
                                <ListItems.TitleWrapper>
                                    <ListItems.ListTitle>{item.title}</ListItems.ListTitle>
                                    <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                                </ListItems.TitleWrapper>
                            </ListItems.LeftWrapper>
            
                            <ListItems.RightWrapper>
                                <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                                <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                            </ListItems.RightWrapper>
                        </ListItems.ItemWrapper>
                        <View style={styles.divider} />
                    </>
                )}
                keyExtractor={item => item.id}
            />
            {/* <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} />
            <ListItems.ItemWrapper>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <View style={styles.divider} /> */}
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