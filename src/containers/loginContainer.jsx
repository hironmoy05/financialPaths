import React, { useState } from 'react';
import { Login } from "../components";
import { SafeArea } from '../components/splash/styles/splash';
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';
import Eye from '../assets/Eye.svg';
import Facebook from '../assets/facebook.svg';
import GooglePlus from '../assets/google+.svg';
import FinpathLogin1 from '../assets/finpath_logo1.svg';
import { Pressable } from 'react-native';


export const LoginContainer = ({navigation}) => {
    const [text, onChangeText] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <SafeArea>
            <Login>
                <Login.SmallLogoBox>
                    <FinpathLogin1 />
                </Login.SmallLogoBox>
            </Login>
            <Login.LoginContainer>
                <Login.LoginFormBox>
                    <Login.LoginTitle>Login</Login.LoginTitle>
                    <Login.LoginSubTitle>Welcome back</Login.LoginSubTitle>
                </Login.LoginFormBox>
                <Login.FormBox>
                    <Login.Label>Email ID</Login.Label>
                    <Login.IconBox>
                        <Email />
                    </Login.IconBox>
                    <Login.FormTextInput
                        placeholderTextColor='#C9C9C9'
                        placeholder= "username@email.com"
                        value={text}
                        name='text'
                        label='Email ID'
                        onChangeText={text => onChangeText(text)}
                        />
                </Login.FormBox>
                <Login.FormBox>
                <Login.Label>Password</Login.Label>
                    <Login.IconBox>
                        <Password />
                    </Login.IconBox>
                    <Login.FormTextInput
                        placeholderTextColor='#C9C9C9'
                        placeholder= "Please enter password"
                        value={password}
                        name='password'
                        secure={true}
                        onChangePassword={password => onChangePassword(password)}
                    />
                    <Login.IconBox2>
                        <Eye />
                    </Login.IconBox2>
                </Login.FormBox>
                <Login.ForgotText>Forgot password?</Login.ForgotText>
                <Login.FormButton mode='contained'>Login</Login.FormButton>
                <Login.LineText />

                <Login.FormButtonBox>
                    <Login.FormSelfButton bgColor={'#267dce'}>
                        <Login.FormIconBox>
                            <Facebook />
                        </Login.FormIconBox>
                        <Login.FormSelfText>Facebook</Login.FormSelfText>
                    </Login.FormSelfButton>
                    <Login.FormSelfButton bgColor={'#fe1d1d'}>
                        <Login.FormIconBox>
                            <GooglePlus />
                        </Login.FormIconBox>
                        <Login.FormSelfText>
                            Google +
                        </Login.FormSelfText>
                    </Login.FormSelfButton>
                </Login.FormButtonBox>
                    
            </Login.LoginContainer>
                <Login.RegisterTextBox>Don't have an account {" "}
                    <Pressable onPress={() => navigation.navigate('Registeration')}><Login.ForgotText>Register here</Login.ForgotText></Pressable>
                </Login.RegisterTextBox>
        </SafeArea>
    )
}