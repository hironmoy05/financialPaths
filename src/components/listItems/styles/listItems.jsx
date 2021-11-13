import Styled from 'styled-components/native';

export const Container = Styled.View`
    margin-top: 30px;
    display: flex;
`;

export const ItemWrapper = Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    border-bottom: 2px solid #222;
    margin-top: 10px;
    ${(props) => props.border}
`;

export const Divider = Styled.View``;

export const LeftWrapper = Styled.View`
display: flex;
flex-direction: row;
align-items: center;
`;

export const RightWrapper = Styled.View`

`;

export const TitleWrapper = Styled.View`
margin-left: 20px;
`;

export const PriceWrapper = Styled.View``;

export const ListTitle = Styled.Text`
    font-family: 'Open Sans Bold'
`;

export const ListSubTitle = Styled.Text`
    font-family: 'Open Sans Regular'
`;

export const ListPrice = Styled.Text`
    font-family: 'Open Sans Bold'
`;

export const ListPercent = Styled.Text`

    text-align: right;
`;