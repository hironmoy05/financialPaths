import React from 'react';
import Pie from 'react-native-pie';
import { PorfolioTab } from '../components';
import {View, StyleSheet, FlatList} from 'react-native';
import { ListItems } from '../components';
import BitCoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/ethereum.svg';
import LiteCoin from '../assets/litecoin.svg';
import Ripple from '../assets/ripple.svg';
import Dash from '../assets/dash.svg';
import EthereumClassic from '../assets/ethereum_classic.svg';
import { calcHeight, calcWidth } from '../responsive';

export const PortfolioTabContainer = () => {
    const folioBorder = {
        border: '1px solid #A8A8A8',
        'border-radius': '5px',
        width: calcWidth(90),
        margin: '0 auto 8px',
    }

    const DATA = [
        {coin: <BitCoin />, id: '0', coinValue: '2.62565', subTitle: 'BTC', price: '32,389.30', percentage: '35'},
        {coin: <Ethereum />, id: '1', coinValue: '1.64345', subTitle: 'ETH', price: '13,389.30', percentage: '15'},
        {coin: <LiteCoin />, id: '2', coinValue: '10.47665', subTitle: 'LTC', price: '3,389.30', percentage: '15'},
        {coin: <Ripple />, id: '3', coinValue: '40.73795', subTitle: 'RPL', price: '2,389.30', percentage: '15'},
        {coin: <Dash />, id: '4',coinValue: '15.45654', subTitle: 'DSH', price: '52,389.30', percentage: '15'},
        {coin: <EthereumClassic />, id: '5', coinValue: '20.5486', subTitle: 'ETC', price: '52,389.30', percentage: '5'},
    ]

    return (
        <PorfolioTab>
            <View style={{
                backgroundColor: '#fff',
                width: 250,
                height: 250,
                borderRadius: 150,
                marginTop: 50,
                border: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
             <View>
            <Pie
              radius={110}
              innerRadius={25}
              sections={[
                {
                    percentage: Number(`${DATA[5].percentage}`),
                    color: '#146714',
                },
                {
                    percentage: Number(`${DATA[4].percentage}`),
                    color: '#2856D0',
                },
                {
                    percentage: Number(`${DATA[3].percentage}`),
                    color: '#18C818',
                },
                {
                    percentage: Number(`${DATA[2].percentage}`),
                    color: '#325A97',
                },
                {
                    percentage: Number(`${DATA[1].percentage}`),
                    color: '#393A3B',
                },
                {
                  percentage: Number(`${DATA[0].percentage}`),
                  color: '#F29423',
                },
              ]}
              dividerSize={2}
              strokeCap={'butt'}
              />
          </View>
            </View>

            <PorfolioTab.Container>

                <ListItems>
                    <FlatList
                        data={DATA}
                        renderItem={({item, index}) => {
                            return (
                                <>
                                <ListItems.ItemWrapper border={folioBorder}>
                                    <ListItems.LeftWrapper>
                                        {item.coin}
                                        <ListItems.TitleWrapper>
                                            <ListItems.ListSubTitle>{item.subTitle}</ListItems.ListSubTitle>
                                            <ListItems.ListTitle>{item.coinValue}</ListItems.ListTitle>
                                        </ListItems.TitleWrapper>
                                    </ListItems.LeftWrapper>
                    
                                    <ListItems.RightWrapper>
                                        <ListItems.ListPercent>+{item.percentage}%</ListItems.ListPercent>
                                        <ListItems.ListPrice>{item.price}USD</ListItems.ListPrice>
                                    </ListItems.RightWrapper>
                                </ListItems.ItemWrapper>
                                </>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </ListItems>
            </PorfolioTab.Container>
        </PorfolioTab>
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