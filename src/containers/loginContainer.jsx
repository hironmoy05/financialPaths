import React, { useState, useRef, useEffect } from 'react';
import { Login } from "../components";
import { SafeArea } from '../components/splash/styles/splash';
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';
import Eye from '../assets/Eye.svg';
import EyeHide from '../assets/eye_hide.svg';
import Facebook from '../assets/facebook.svg';
import GooglePlus from '../assets/google+.svg';
import FinpathLogin1 from '../assets/finpath_logo1.svg';
import { Pressable, KeyboardAvoidingView, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deviceHeight} from '../responsive';
import Loader from './loaderContainer';
import { Keyboard } from 'react-native';

export const LoginContainer = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [emailInputColor, setEmailInputColor] = useState(false);
    const [passwordInputColor, setPasswordInputColor] = useState(false);
    const [loginButtonInputColor, setLoginButtonInputColor] = useState(false);
    const YOUR_CLIENT_ID = 'mon3223231';
    const url='https://www.finpath.oyeapps.com/RestApiV1/user_login';

    const passwordRef = useRef();

    const handleSubmitPress = () => {
        setErrorText('');
        
        if (!userEmail) {
            alert('Please Enter Email');
            return;
        }
        if (!password) {
            alert('Please Enter Password');
            return;
        }
        setLoading(true);
    
        let dataToSend = {email: userEmail, password: password, device_id: YOUR_CLIENT_ID};
        let formDetails = [];
    
        for (let key in dataToSend) {
            let encodeKey = encodeURIComponent(key);
            let encodeValue = encodeURIComponent(dataToSend[key]);
            formDetails.push(encodeKey + '=' + encodeValue);
        }
        formDetails = formDetails.join('&');
        
        fetch(url, {
            method: 'POST',
            body: formDetails,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        })
        .then(res => {
            if (res.ok && (res.status === 404 || res.status === 503)) {
                throw new Error('Server error');
            } else {
                return res.json();
            }
        })
        .then(json => {
            setLoading(false);
            
            // if login credenial is same
            if (json.Status === 'Success') {
                AsyncStorage.setItem('userId', json.user_detail.access_key);
                
                console.log(json);
                return navigation.replace('Drawer')
            } else {
                setErrorText(json.Message);
                console.log('Please check your email id or password');
            }
        })
        .catch(error => {
            setLoading(false);
            console.log(error);
        })
    }
    
    
    // useEffect (() => {
    //     console.log(`Email is ${userEmail}, and password is ${password}`);
    //     if(userEmail.length === 0) {
    //         console.log('Email is required!');
    //         return;
    //     } else if (password.length === 0) {
    //         console.log('Password is required!');
    //         return;
    //     }

    //     try {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 email: userEmail,
    //                 password: password,
    //                 device_id: YOUR_CLIENT_ID
    //             })
    //         })
    //             .then(res => {
    //                 if (res.ok && (res.status === 404 || res.status === 503)) {
    //                     setLoginStatus(false);
    //                     throw new Error('Server error');
    //                 } else {
    //                     return res.json();
    //                 }
    //             })
    //             .then(json => {

    //                 if (json.Status !== 'Error') {
    //                     setLoginStatus(true);

    //                     AsyncStorage.setItem('finPath', userEmail)

    //                     console.log('Value of json data', json);
    //                 }
    //             }
    //         )
    //     } catch(error) {
    //         console.log(Error.log(error));
    //     }
    // }, [userEmail, password])

    // const login = () => {
    //     if (userEmail.length >= 3 && password.length >= 5 && loginStatus && getValue !== '') {
    //         return navigation.navigate('Drawer');
    //     }
    //     setUserEmail('');
    //     setPassword('');
    //     setLoginStatus(false);
    // }

    // const getValueFromAsync = async () => {
    //     return AsyncStorage.getItem('finpath').then(value => setGetValue(value));
    // }

    // const removeValueFromAsync = async () => {
    //     return AsyncStorage.removeItem('finpath');
    // }

    // console.log(getValueFromAsync());
    // console.log(removeValueFromAsync());

    useEffect(() => {
        userEmail ? setEmailInputColor(true) : setEmailInputColor(false);
        password ? setPasswordInputColor(true) : setPasswordInputColor(false);
        password && userEmail ? setLoginButtonInputColor(true) : setLoginButtonInputColor(false)
    })

    return (
        <SafeArea>
            <Loader loading={loading} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                contentContainerStyle='position'
                KeyboardVerticalOffset='0'
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
                        <Login.EmailTextInput
                            emailInputColor={emailInputColor}
                            placeholderTextColor='#C9C9C9'
                            placeholder= "username@email.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCapitalize='none'
                            value={userEmail}
                            name='userEmail'
                            label='Email ID'
                            onSubmitEditing={() => passwordRef.current.focus()}
                            onChangeText={e => setUserEmail(e)}
                        />
                    </Login.FormBox>
                    <Login.FormBox>
                    <Login.Label>Password</Login.Label>
                        <Login.IconBox>
                            <Password />
                        </Login.IconBox>
                        <Login.PasswordTextInput
                            passwordInputColor={passwordInputColor}
                            placeholderTextColor='#C9C9C9'
                            placeholder= "Please enter password"
                            keyboardType='default'
                            // forwardRef={passwordRef}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={true}
                            secureTextEntry={secureText}
                            returnKeyType='next'
                            value={password}
                            name='password'
                            onChangeText={pass => setPassword(pass)}
                        />
                        <Login.IconBox2>
                        <Pressable onPress={() => setSecureText(!secureText)}>{secureText ? <EyeHide /> : <Eye />}</Pressable>
                        </Login.IconBox2>
                    </Login.FormBox>

                    {errorText != '' ? (
                        <Text style={styles.errorTextStyle}>{errorText}</Text>
                    ) : null}

                    <Pressable onPress={() => console.log('forgot password')}><Login.ForgotText>Forgot password?</Login.ForgotText></Pressable>
                    <Login.LoginFormButton loginButtonInputColor={loginButtonInputColor} onPress={() => handleSubmitPress()} mode='contained'>Login</Login.LoginFormButton>
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

const styles = StyleSheet.create({
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
})