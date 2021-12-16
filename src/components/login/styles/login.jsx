import Styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import {StyleSheet, TextInput, Text, Pressable} from 'react-native';
import { deviceWidth } from '../../../responsive';


export const Container = Styled.View`
    flex: 1;
    overflow: hidden;
    position: relative;
`;
    
export const Inner = Styled.View`
    height: 300px;
    background-color: #013567;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    align-items: center;
    postition: relative;
`;

export const SmallLogoBox = Styled.View`
    margin-top: 40px;
`;

export const LoginContainer = Styled.View`
    background-color: #fff;
    position: absolute;
    top: 20%;
    left: 3%;
    width: 94%;
    border-radius: 10px;
    padding: 15px 25px;
    ${props => props.containerHeight};
    border-width: 4px;    
    border-color: #267DCE12
`;
    
export const LoginFormBox = Styled.View``;

export const ForgotText = Styled.Text`
    font-family: 'Open Sans Bold';
    color: #013567;
    font-size: 15px;
    text-decoration: underline;
    text-align: right;
    margin-top: 10px;a
`;

export const LoginTitle = Styled.Text`
    font-family: 'Open Sans Bold';
    font-size: 30px;
    color: #222;
    letter-spacing: 2px;
    `;
    
export const LoginSubTitle = Styled.Text`
    font-family: 'Open Sans Regular';
`;

export const HeaderBox = Styled.View``;

export const FormBox = Styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: -5px;
    ${props => props.kycMargin}
`;
    
    export const Label = Styled(Text)`
    position: absolute;
    z-index: 2;
    top: 16px;
    left: 20px;
    color: #D2D2D2;
    background-color: #fff;
    `;
    
    export const IconBox = Styled.View`
    position: absolute;
    z-index: 2;
    top: ${props => props.KycDoc ? '25px' : '43px'};
    left: 14px;
    ${props => props.down}
    `;
    
    export const IconBox2 = Styled.View`
    position: absolute;
    z-index: 2;
    top: 43px;
    right: 14px;
`;
    
    
export const FormTextInput = Styled(TextInput)`
    background-color: #fff;
    border: none;
    border: 2px solid ${props => props.emailInputColor ? '#013567' : '#A8A8A8'};
    border-radius: 8px;
    ${({phone}) => phone ? `padding: 10px 0 8px 100px ` : `padding: 10px 0 8px 40px`};
    margin-top: 26px; 
    color: #212121;
`;

export const EmailTextInput = Styled(TextInput)`
    background-color: #fff;
    border: none;
    border: 2px solid ${props => props.emailInputColor ? '#013567' : '#A8A8A8'};
    border-radius: 8px;
    ${({phone}) => phone ? `padding: 10px 0 8px 100px ` : `padding: 10px 0 8px 40px`};
    margin-top: 26px; 
    color: #212121;
`;

export const PasswordTextInput = Styled(TextInput)`
    background-color: #fff;
    border: none;
    border: 2px solid ${props => props.passwordInputColor ? '#013567' : '#A8A8A8'};
    border-radius: 8px;
    ${({phone}) => phone ? `padding: 10px 0 8px 100px ` : `padding: 10px 0 8px 40px`};
    margin-top: 26px; 
    color: #212121;
`;

export const NameTextInput = Styled(TextInput)`
    background-color: #fff;
    border: none;
    border: 2px solid ${props => props.nameInputColor ? '#013567' : '#A8A8A8'};
    border-radius: 8px;
    ${({phone}) => phone ? `padding: 10px 0 8px 100px ` : `padding: 10px 0 8px 40px`};
    margin-top: 26px; 
    color: #212121;
`;

export const RegEmailTextInput = Styled(TextInput)`
    background-color: #fff;
    border: none;
    border: 2px solid ${props => props.regEmailInputColor ? '#013567' : '#A8A8A8'};
    border-radius: 8px;
    ${({phone}) => phone ? `padding: 10px 0 8px 100px ` : `padding: 10px 0 8px 40px`};
    margin-top: 26px; 
    color: #212121;
`;
export const RegPasswordTextInput = Styled(TextInput)`
    background-color: #fff;
    border: none;
    border: 2px solid ${props => props.regPasswordInputColor ? '#013567' : '#A8A8A8'};
    border-radius: 8px;
    ${({phone}) => phone ? `padding: 10px 0 8px 100px ` : `padding: 10px 0 8px 40px`};
    margin-top: 26px; 
    color: #212121;
`;
export const RegRetypePasswordTextInput = Styled(TextInput)`
    background-color: #fff;
    border: none;
    border: 2px solid ${props => props.regRetypePasswordInputColor ? '#013567' : '#A8A8A8'};
    border-radius: 8px;
    ${({phone}) => phone ? `padding: 10px 0 8px 100px ` : `padding: 10px 0 8px 40px`};
    margin-top: 26px; 
    color: #212121;
`;

export const FormButton = Styled(Button)`
    background-color: #A8A8A8;
    padding: 8px 40px;
    margin-top: 15px;
`;
export const RegFormButton = Styled(Button)`
    background-color: ${props => props.buttonInputColor ? '#013567' : '#A8A8A8'};
    padding: 8px 40px;
    margin-top: 15px;
`;
export const LoginFormButton = Styled(Button)`
    background-color: ${props => props.loginButtonInputColor ? '#013567' : '#A8A8A8'};
    padding: 8px 40px;
    margin-top: 15px;
    ${props => props.sendButton}
`;

export const FormSelfButton = Styled(Pressable)`
    background-color: ${props => props.bgColor};
    width: 48%;
    height: 50px;
    margin-right: 8px;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
    
    export const FormIconBox = Styled.View`
        position: absolute;
        left: 8px;
        top: 10px;
    `;

    export const FormSelfText = Styled.Text`
        color: #fff;
        font-size: 17px;
        font-weight: 600;
    `;

    
    export const FormButtonBox = Styled.View`
        display: flex;
        flex-direction: row;
        font-size: 12px;
    `;

    export const RegisterBox = Styled.View` 
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: center;
        position: absolute;
        bottom: -12%;
        left: -4%;
        width: ${deviceWidth}px;
    `;

    export const LoginBox = Styled.View`
        display: flex;
        flex-direction: row;
        padding-bottom: 5%;
        align-items: baseline;
        justify-content: center;
        width: ${deviceWidth}px;
    `;

// With StyleSheet
export const styles = StyleSheet.create({
    accentTextWrapper: {
        borderBottomColor: '#013567',
        borderBottomWidth: 2,
        marginBottom: 0,
        marginLeft: 'auto',
        marginTop: 8,

    },
    accenText: {
        fontSize: 15,
        color: '#013567',
    },

    // lineText component
    lineWrapper: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingTop: 24,
    },

    leftLine: {
        flex: 1, 
        height: 2, 
        backgroundColor: '#A8A8A8'
    },

    innerLineText: {
        width: 70, 
        textAlign: 'center',
        color: '#333',
    },

    rightLine: {
        flex: 1, 
        height: 2, 
        backgroundColor: '#A8A8A8'
    },

    registerTextBox: {
        
    },
    
    registerTextColor: {
        color: '#013567',

    },
    

});

