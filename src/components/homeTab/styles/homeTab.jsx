import Styled from 'styled-components/native';
import { deviceHeight } from '../../../responsive';

export const Item = Styled.View`
    height: ${deviceHeight}px;
    position: relative;
`;
    
export const Inner = Styled.View`
    height: 20%;
    background-color: #013567;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

`;

export const Container = Styled.View`
    display: flex;
    align-items: center;
    position: relative;
`;

export const ListContainer = Styled.View`
    ${props => props.screenSizeTwo}
`;