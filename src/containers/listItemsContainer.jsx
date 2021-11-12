import React from 'react';
import {ListItems} from '../components';
import BitCoin from '../assets/bitcoin.svg';
import {View, StyleSheet} from 'react-native';

export const ListItemsContainer = () => {
    return (

        <ListItems>
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