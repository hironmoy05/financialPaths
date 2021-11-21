import React, { useState, useEffect } from 'react';
import { Login } from "../components";
import { SafeArea } from '../components/splash/styles/splash';
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';
import Eye from '../assets/Eye.svg';
import Facebook from '../assets/facebook.svg';
import GooglePlus from '../assets/google+.svg';
import FinpathLogin1 from '../assets/finpath_logo1.svg';
import { Pressable, KeyboardAvoidingView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deviceHeight} from '../responsive';

export const LoginContainer = ({navigation}) => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const [getValue, setGetValue] = useState('');
    const YOUR_CLIENT_ID = 'mon3223231';
    const url='https://www.tapmall.oyeapps.com/d977e84cf4d5/vsrn22/user_login';

    useEffect (() => {
        console.log(`Email is ${text}, and password is ${password}`);
        if(text.length === 0) {
            console.log('Email is required!');
            return;
        } else if (password.length === 0) {
            console.log('Password is required!');
            return;
        }

        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: text,
                    password: password,
                    device_id: YOUR_CLIENT_ID
                })
            })
                .then(res => {
                    if (res.ok && (res.status === 404 || res.status === 503)) {
                        setLoginStatus(false);
                        throw new Error('Server error');
                    } else {
                        return res.json();
                    }
                })
                .then(json => {

                    if (json.Status !== 'Error') {
                        setLoginStatus(true);

                        AsyncStorage.setItem('finPath', text)

                        console.log('Value of json data', json);
                    }
                }
            )
        } catch(error) {
            console.log(Error.log(error));
        }
    }, [text, password])

    const login = () => {
        if (text.length >= 3 && password.length >= 5 && loginStatus && getValue !== '') {
            return navigation.navigate('Dashboard');
        }
        setText('');
        setPassword('');
        setLoginStatus(false);
    }

    const getValueFromAsync = async () => {
        return AsyncStorage.getItem('finpath').then(value => setGetValue(value));
    }

    const removeValueFromAsync = async () => {
        return AsyncStorage.removeItem('finpath');
    }

    console.log(getValueFromAsync());
    console.log(removeValueFromAsync());

    return (
        <SafeArea>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                contentContainerStyle='position'
                keyboardVerticalOffset='0'
            >
            <View style={{height: deviceHeight}}>
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
                            onChangeText={text => setText(text)}
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
                            onChangeText={password => setPassword(password)}
                        />
                        <Login.IconBox2>
                            <Eye />
                        </Login.IconBox2>
                    </Login.FormBox>
                    <Pressable onPress={() => console.log('forgot password')}><Login.ForgotText>Forgot password?</Login.ForgotText></Pressable>
                    <Login.FormButton onPress={() => login()} mode='contained'>Login</Login.FormButton>
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
                    <Login.RegisterBox>
                        <Login.RegisterTextBox>Don't have an account {" "}</Login.RegisterTextBox>
                        <Login.RegisterTextBox><Pressable onPress={() => navigation.navigate('Registeration')}><Login.ForgotText>Register here</Login.ForgotText></Pressable></Login.RegisterTextBox>
                    </Login.RegisterBox>
                </Login.LoginContainer>
            </View>
            </KeyboardAvoidingView>
        </SafeArea>
    )
}