import React from 'react';
import Pie from 'react-native-pie';
import { PorfolioTab } from '../components';
import {View, StyleSheet} from 'react-native';
import { ListItems } from '../components';
import BitCoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/ethereum.svg';
import LiteCoin from '../assets/litecoin.svg';
import Ripple from '../assets/ripple.svg';
import { ScrollView } from 'react-native';
import { calcHeight, calcWidth } from '../responsive';

export const PortfolioTabContainer = () => {
    const folioBorder = {
        border: '1px solid #A8A8A8',
        'border-radius': '5px',
        width: calcWidth(90),
        margin: '0 auto 8px',
    }

    // coins data
    const percentage = {
        bitcoin: 60,
        ethereum: 25,
        liteCoin: 10,
        ripple: 10
    }

    return (
        <ScrollView>
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
                  percentage: Number(`${percentage.ripple}`),
                  color: '#393A3B',
                },
                {
                  percentage: Number(`${percentage.liteCoin}`),
                  color: '#18C818',
                },
                {
                  percentage: Number(`${percentage.ethereum}`),
                  color: '#325A97',
                },
                {
                  percentage: Number(`${percentage.bitcoin}`),
                  color: '#F29423',
                },
              ]}
              dividerSize={2}
              strokeCap={'butt'}
              />
          </View>
            </View>

      
            <ListItems>
            <ListItems.ItemWrapper border={folioBorder}>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPercent>+{percentage.bitcoin}%</ListItems.ListPercent>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <ListItems.ItemWrapper border={folioBorder}>
                <ListItems.LeftWrapper>
                    <Ethereum />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Etheruim</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPercent>+{percentage.ethereum}%</ListItems.ListPercent>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <ListItems.ItemWrapper border={folioBorder}>
                <ListItems.LeftWrapper>
                    <Ripple />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Litcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPercent>+{percentage.liteCoin}%</ListItems.ListPercent>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <ListItems.ItemWrapper border={folioBorder}>
                <ListItems.LeftWrapper>
                    <LiteCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Ripple</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPercent>+{percentage.ripple}%</ListItems.ListPercent>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
            <ListItems.ItemWrapper border={folioBorder}>
                <ListItems.LeftWrapper>
                    <BitCoin />
                    <ListItems.TitleWrapper>
                        <ListItems.ListTitle>Bitcoin</ListItems.ListTitle>
                        <ListItems.ListSubTitle>BTC</ListItems.ListSubTitle>
                    </ListItems.TitleWrapper>
                </ListItems.LeftWrapper>

                <ListItems.RightWrapper>
                    <ListItems.ListPercent>+2.84%</ListItems.ListPercent>
                    <ListItems.ListPrice>$64,240.05</ListItems.ListPrice>
                </ListItems.RightWrapper>
            </ListItems.ItemWrapper>
        </ListItems>
        </PorfolioTab>
              </ScrollView>
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