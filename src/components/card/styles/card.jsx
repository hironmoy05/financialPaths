import Styled from 'styled-components/native';
import  {Pressable} from 'react-native';

export const Inner = Styled.View``;

export const Container = Styled.View`
    width: 390px;
    height: 200px;
    margin-top: 20px;
    background-color:  #1A66E9;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`;

export const Circle = Styled.View`
    width: 230px;
    height: 230px;
    border-radius: 200px;
    background: #6491E0;
    position: absolute;
    right: -100px;
    top: -110px;
`;

export const Frame = Styled.View`
    padding: 25px;
    display: flex;
    justify-content: center;
`;

export const TextBox = Styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 15px
`;

export const IconBox = Styled.View``;

export const Frame1 = Styled.View`
    display:flex;
`;

export const Frame2 = Styled.View`
    display:flex;
    flex-direction: row;
    align-items: baseline;
    padding-bottom: 0;
`;


export const CardTitle = Styled.Text`
    font-family: 'Open Sans Medium';
    color: #fff;
    opacity: 0.7;
`;

export const CardCoin = Styled.Text`
    padding-top: 5px;
    font-family: 'Open Sans Medium';
    font-size: 28px;
    color: #fff;
    letter-spacing: 2px;
`;

export const CardCoinShort = Styled.Text`
    color: #fff;
    opacity: .7;
`;

export const CardCurrency = Styled.Text`
    color: #fff;
    letter-spacing: 2px;
`;

export const ButtonBox = Styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
`;

export const ActionButtonBox = Styled.View`
    width: 48%;
    background: #fff;
    border-radius: 3px;
`;

export const ActionButton = Styled(Pressable)`
    padding: 8px 20px;
`;

export const ActionButtonText = Styled.Text`
    font-family: 'Open Sans Meidum';
    text-align: center;
    color: #013567
`;