import Styled from 'styled-components/native';

export const Item = Styled.View`
    background-color: #013567;
    height: 180px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;
    
export const Inner = Styled.View`
    flex: 1;
`;

export const Container = Styled.View`
    display: flex;
    align-items: center
`;

export const DashboarTitle = Styled.Text`
    font-family: 'Open Sans Medium';
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-top: 5%;
`;