import React, { useState, useRef, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { injectStyle } from 'react-toastify/dist/inject-style';
import { Login } from "../components";
import { SafeArea } from '../components/splash/styles/splash';
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';
import Eye from '../assets/Eye.svg';
import EyeHide from '../assets/eye_hide.svg';
import Facebook from '../assets/facebook.svg';
import GooglePlus from '../assets/google+.svg';
import ResetSuccessfully from '../assets/reset_successfully.svg'
import FinpathLogin1 from '../assets/finpath_logo1.svg';
import { ScrollView, TouchableOpacity, Pressable, KeyboardAvoidingView, View, Text, StyleSheet, TextInput, BackHandler } from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deviceHeight, deviceWidth, PixelDeviceHeight} from '../responsive';
import Loader from './loaderContainer';
import { Keyboard } from 'react-native';
import Cross from '../assets/cross.svg';
import { calcWidth } from '../responsive';
import { signoutRequest } from '../store/api';
import { getUserId } from '../store/bugs';
import { verifyEmail, verifyOtp, resetThePassword, msgReceived } from '../store/forgot';
import { BASE_URL, USER_LOGIN, YOUR_CLIENT_ID } from '../constants/urls';
import { useDispatch, useSelector } from 'react-redux';

export const LoginContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const forgotEmail = useSelector(msgReceived);

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailVerify, setIsEmailVerify] = useState(false);
    const [regEmailInputColor, setRegEmailInputColor] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [emailInputColor, setEmailInputColor] = useState(false);
    const [passwordInputColor, setPasswordInputColor] = useState(false);
    const [loginButtonInputColor, setLoginButtonInputColor] = useState(false);
    const [buttonInputColor, setButtonInputColor] = useState(false);

    const [forgotButtonInputColor, setForgotButtonInputColor] = useState(false);
    
    const [recoverUserEmailInputColor, setRecoverUserEmailInputColor] = useState(false);

    const [crossClick, setCrossClick] = useState(false)
    const [firstModalVisible, setFirstModalVisible] = useState(false);
    const [recoverUserEmail, setRecoverUserEmail] = useState('');

    const [secondModalVisible, setSecondModalVisible] = useState(false);
    const [thirdModalVisible, setThirdModalVisible] = useState(false);
    const [fourthModalVisible, setFourthModalVisible] = useState(false);

    const [resetPassword, setResetPassword] = useState(false);
    const [resetPasswordInputColor, setResetPasswordInputColor] = useState(false);

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [newPasswordInputColor, setNewPasswordInputColor] = useState(false);
    const [confirmNewPasswordInputColor, setConfirmNewPasswordInputColor] = useState(false);
    const [modalOtpBtn, setModalOtpBtn] = useState(false);

    const [resetTextColor, setResetTextColor] = useState(false);

    const [newSecureText, setNewSecureText] = useState(true)
    const [confirmNewSecureText, setConfirmNewSecureText] = useState(true)

    const [newPasswordTextColor, setNewPasswordTextColor] = useState(false);
    const [confirmNewPasswordTextColor, setConfirmNewPasswordTextColor] = useState(false);

    // const passwordRef = useRef();

    const firstInputRef = useRef();
    const secondInputRef = useRef()
    const thirdInputRef = useRef()
    const fourthInputRef = useRef()
    const fifthInputRef = useRef()
    const sixthInputRef = useRef()

    const [one, setOne] = useState();
    const [two, setTwo] = useState();
    const [three, setThree] = useState();
    const [four, setFour] = useState();
    const [five, setFive] = useState();
    const [six, setSix] = useState();

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
        
        const url = BASE_URL+USER_LOGIN;

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
        .then(async json => {
            setLoading(false);
            
            // if login credenial is same
            if (json.Status === 'Success') {
                // console.log(json)

                const userKey = json.user_detail.access_key;
                const email = json.user_detail.email;
                const name = json.user_detail.name;
                const id = json.user_detail.uid;

                dispatch(getUserId(id))
                // store.dispatch(getUserId(id))

                await AsyncStorage.multiSet([['userId', userKey], ['user_Id', id], ['userEmail', email], ['userName', name]]);
                
                return navigation.replace('Drawer');
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

    useEffect(() => {
        userEmail ? setEmailInputColor(true) : setEmailInputColor(false);
        password ? setPasswordInputColor(true) : setPasswordInputColor(false);
        password && userEmail ? setLoginButtonInputColor(true) : setLoginButtonInputColor(false);
        userEmail ? setRegEmailInputColor(true) : setRegEmailInputColor(false);    
        userEmail ? setButtonInputColor(true) : setButtonInputColor(false);
        resetPasswordInputColor ? setResetPasswordInputColor(true) : setResetPasswordInputColor(false);
        // recoverUserEmail ? setRecoverUserEmail(true) : setRecoverUserEmail(false);
        one && two && three && four && five && six ? setModalOtpBtn(true) : setModalOtpBtn(false);
        
        recoverUserEmail ? setRecoverUserEmailInputColor(true) : setRecoverUserEmailInputColor(false)
        recoverUserEmail ? setResetPasswordInputColor(true) : setResetPasswordInputColor(false);
        newPassword ? setNewPasswordInputColor(true) : setNewPasswordInputColor(false);
        confirmNewPassword ? setConfirmNewPasswordInputColor(true) : setConfirmNewPasswordInputColor(false);
        newPassword && confirmNewPassword ? setResetPasswordInputColor(true) : setResetPasswordInputColor(false);
        newPassword ? setNewPasswordTextColor(true) : setNewPasswordTextColor(false);
        confirmNewPassword ? setConfirmNewPasswordTextColor(true) : setConfirmNewPasswordTextColor(false);
    });

    function backAction() {
        BackHandler.exitApp();
    }

    useEffect(() => {
        // dispatch(signoutRequest());
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    // Forgot Passwrod
    function handleForgotPassword() {
        setIsEmailVerify(true);
        setFirstModalVisible(true);
    }
    
    // Email Verify
    useEffect(() => {
        if (forgotEmail === 'Error') return;

         if (forgotEmail === 'Success') {
            setCrossClick(!crossClick);
            setFirstModalVisible(false);
        }

    }, [forgotEmail])
    
    
    function sendOtp() {
        const otp = one+two+three+four+five+six;
        dispatch(verifyOtp(recoverUserEmail, otp));
    }
    
    function passwordReset() {
        dispatch(resetThePassword(recoverUserEmail, newPassword, confirmNewPassword));
        dispatch(signoutRequest());
    }
    

    return (
        <SafeArea style={{position: 'relative', flex: 1, backgroundColor: '#fff'}}>
            {/* First Modal:  Email verify modal */}
            <Modal 
                isVisible={firstModalVisible}
                deviceHeight={PixelDeviceHeight}
                deviceWidth={deviceWidth}
                hideModalContentWhileAnimating={true}
                useNativeDriver={false}
                onBackdropPress={() => {
                    setFirstModalVisible(false);
                    }
                }
                style={{margin: 0}}
                onModalHide={() => {
                    !crossClick && setSecondModalVisible(true);
                }}
                >
                <View style={styles.popup}>
                    <View style={styles.cross}>
                        <Pressable onPress={() => {
                            setFirstModalVisible(false)
                        }}>
                            <Cross />
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.title}>Forgot Password?</Text>
                        <Text style={styles.subTitle}>Enter your Registered email ID and we'll send you a OTP code for verification.</Text>
                    </View>

                    <Login.FormBox>
                        <Login.Label>Email ID</Login.Label>
                        <Login.IconBox>
                            <Email />
                        </Login.IconBox>
                        <Login.RegEmailTextInput
                            regEmailInputColor={recoverUserEmailInputColor}
                            placeholderTextColor='#C9C9C9'
                            placeholder= "username@email.com"
                            keyboardType='email-address'
                            value={recoverUserEmail}
                            name='userEmail'
                            secure={true}
                            onChangeText={email => setRecoverUserEmail(email)}
                        />
                    </Login.FormBox>
                    
                    <Login.RegisterBox>
                        <Login.RegisterTextBox>Don't have an account {" "}</Login.RegisterTextBox>
                        <Login.RegisterTextBox><Pressable onPress={() => navigation.navigate('Login')}><Login.ForgotText>Send OTP</Login.ForgotText></Pressable></Login.RegisterTextBox>
                    </Login.RegisterBox>

                    <TouchableOpacity activeOpacity={.6}><Pressable disabled={!recoverUserEmail} onPress={() => dispatch(verifyEmail(recoverUserEmail))} style={[styles.button, {backgroundColor: recoverUserEmail ? '#013567' : '#707070'}]}><Text style={{color: '#fff', fontSize: 18, fontFamily: 'Open Sans Bold'}}>Send OTP</Text></Pressable></TouchableOpacity>
                </View>

            </Modal>

            {/* Second Modal:  Submit OTP Modal */}
            <Modal 
                isVisible={secondModalVisible}
                onBackButtonPress={() => setSecondModalVisible(false)}
                onBackdropPress={() => setSecondModalVisible(false)}
                deviceHeight={PixelDeviceHeight}
                deviceWidth={deviceWidth}
                useNativeDriver={false}
                style={{margin: 0}}
                onModalHide={() => {
                    crossClick && setThirdModalVisible(true)
                }}
            >
            <View style={styles.popup}>
                <View style={styles.cross}>
                    <Pressable onPress={() => {
                        setSecondModalVisible(false)
                    }}>
                        <Cross />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.title}>Verify Email</Text>
                    <Text style={styles.subTitle}>Please enter the verification code to Verify Email ID we just sent you.</Text>
                </View>
                <View style={styles.otp}>
                    <Text>Enter OTP</Text>
                    <Text>Time Left: 00:02</Text>
                </View>
                <View style={styles.digits}>
                    <TextInput style={styles.number}
                        keyboardType={'numeric'}
                        ref={firstInputRef}
                        placeholder='0'
                        returnKeyType='next'
                        value={one}
                        maxLength={1}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        numberOfLines={1}
                        autoFocus={true}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setOne(num)
                            num && secondInputRef.current.focus()
                        }}
                        />
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
                        returnKeyType='next'
                        value={two}
                        maxLength={1}
                        ref={secondInputRef}
                        blurOnSubmit={false}
                        onChangeText={num => (
                            setTwo(num),
                            num && thirdInputRef.current.focus()
                        )}
                    />
                
                
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
                        returnKeyType='next'
                        value={three}
                        maxLength={1}
                        ref={thirdInputRef}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setThree(num)
                            num && fourthInputRef.current.focus();
                        }}
                    />

                
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
                        returnKeyType='next'
                        value={four}
                        maxLength={1}
                        ref={fourthInputRef}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setFour(num)
                            num && fifthInputRef.current.focus();
                        }}
                    />

                
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
                        returnKeyType='next'
                        value={five}
                        maxLength={1}
                        ref={fifthInputRef}
                        onSubmitEditing={() => {
                            sixthInputRef.current.focus();
                        }}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setFive(num)
                            num && sixthInputRef.current.focus();
                        }}
                    />
                
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
                        returnKeyType='next'
                        value={six}
                        maxLength={1}
                        ref={sixthInputRef}
                        blurOnSubmit={false}
                        onChangeText={num => setSix(num)}
                    />
                </View>
                <View style={styles.resendCode}>
                    <Pressable onPress={() => console.log('resend code')}><Text style={styles.resendCodeText}>Resend Code</Text></Pressable>
                </View>
                <Pressable disabled={!modalOtpBtn} onPress={() => { setSecondModalVisible(false); setCrossClick(!crossClick); sendOtp()} } style={[styles.otpButton, {backgroundColor: `${modalOtpBtn ? '#013567' : '#A8A8A8'}`}]}><Text style={{color: '#fff', fontSize: 18, fontFamily: 'Open Sans Bold'}}>Submit</Text></Pressable>
                </View>
            </Modal>

            {/* Third Modal: Reset Password */}
            <Modal
                 isVisible={thirdModalVisible}
                 onBackButtonPress={() => setThirdModalVisible(false)}
                 onBackdropPress={() => setThirdModalVisible(false)}
                 deviceHeight={PixelDeviceHeight}
                 deviceWidth={deviceWidth}
                 useNativeDriver={false}
                 style={{margin: 0}}
                 onModalHide={() => {
                    !crossClick && setFourthModalVisible(true);
                 }}
            >
            <View style={styles.popup}>
                <View style={styles.cross}>
                    <Pressable onPress={() => setThirdModalVisible(false)}>
                        <Cross />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.title}>Reset Password</Text>
                    <Text style={styles.subTitle}>Reset your password for safety</Text>
                </View>    
                 <Login.FormBox>
                        <Login.Label>New Password</Login.Label>
                            <Login.IconBox>
                                <Password />
                            </Login.IconBox>
                            <Login.PasswordTextInput
                                passwordInputColor={newPasswordInputColor}
                                placeholderTextColor='#C9C9C9'
                                placeholder= "Please enter new password"
                                keyboardType='default'
                                // forwardRef={passwordRef}
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={true}
                                secureTextEntry={newSecureText}
                                returnKeyType='next'
                                value={newPassword}
                                name='password'
                                onChangeText={pass => setNewPassword(pass)}
                            />
                            <Login.IconBox2>
                            <Pressable onPress={() => setNewSecureText(!newSecureText)}>{newSecureText ? <EyeHide /> : <Eye />}</Pressable>
                    </Login.IconBox2>
                    <View style={{display: 'flex', alignItems: 'flex-start', paddingLeft: 3, paddingTop: 3}}>
                        <Text style={[styles.resetTextStyle, {color: `${newPasswordTextColor ? '#1DDB5C' : '#FE1D1D'}`}]}>Must contain alphabet and numericals with more than 8 characters</Text>
                    </View>
                </Login.FormBox>
                 <Login.FormBox>
                        <Login.Label>Confirm New Password</Login.Label>
                            <Login.IconBox>
                                <Password />
                            </Login.IconBox>
                            <Login.PasswordTextInput
                                passwordInputColor={confirmNewPasswordInputColor}
                                placeholderTextColor='#C9C9C9'
                                placeholder= "Please enter new password"
                                keyboardType='default'
                                // forwardRef={passwordRef}
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={true}
                                secureTextEntry={confirmNewSecureText}
                                returnKeyType='next'
                                value={confirmNewPassword}
                                name='password'
                                onChangeText={pass => setConfirmNewPassword(pass)}
                            />
                            <Login.IconBox2>
                            <Pressable onPress={() => setConfirmNewSecureText(!confirmNewSecureText)}>{confirmNewSecureText ? <EyeHide /> : <Eye />}</Pressable>
                    </Login.IconBox2>
                    <View style={{display: 'flex', alignItems: 'flex-start', paddingLeft: 3, paddingTop: 3}}>
                        <Text style={[styles.resetTextStyle, {color: `${confirmNewPasswordTextColor ? '#1DDB5C' : '#FE1D1D'}`}]}>Both password must match</Text>
                    </View>
                </Login.FormBox>
    
                <Pressable disabled={!resetPasswordInputColor} onPress={() => {setThirdModalVisible(false); setCrossClick(!crossClick); passwordReset()}} style={[styles.otpButton, {backgroundColor: `${resetPasswordInputColor ? '#013567' : '#A8A8A8'}`}]}><Text style={{color: '#fff', fontSize: 18, fontFamily: 'Open Sans Bold'}}>Submit</Text></Pressable>
                </View>
            </Modal>

            {/* Reset Successfully: Success modal */}
            <Modal
                 isVisible={fourthModalVisible}
                 onBackButtonPress={() => setFourthModalVisible(false)}
                 onBackdropPress={() => setFourthModalVisible(false)}
                 deviceHeight={PixelDeviceHeight}
                 deviceWidth={deviceWidth}
                 useNativeDriver={false}
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30%'}}
                 onModalHide={() => console.log('second modal closed')}
            >
                <View style={[styles.popup, {width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}]}>
                    <View style={styles.cross}>
                        <Pressable onPress={() => setFourthModalVisible(false)}>
                            <Cross />
                        </Pressable>
                    </View>
                    <ResetSuccessfully />
                    <View style={{marginTop: '15%'}}>
                        <Text style={styles.title}>Reset Successfully</Text>
                        <Text style={[styles.subTitle, {textAlign: 'center', marginBottom: '12%'}]}>Your Password has been changed!</Text>
                    </View>
                    <View style={styles.success}>
                        <Pressable onPress={() => setFourthModalVisible(false)}><Text style={styles.successText}>Go to Login</Text></Pressable>
                    </View>
                </View>
            </Modal>
                        

                <Loader loading={loading} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    contentContainerStyle='position'
                    KeyboardVerticalOffset='0'
                    >
                    <ScrollView>
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
                                    // onSubmitEditing={() => passwordRef.current.focus()}
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

                            <Pressable onPress={() => handleForgotPassword()}><Login.ForgotText>Forgot password?</Login.ForgotText></Pressable>
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
            </ScrollView>
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
      popup: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 'auto',
    },
    cross: {
        position: 'relative',
        marginLeft: 'auto',
    },
    title: {
        fontSize: Number(`${calcWidth(7)}`),
        fontFamily: 'Open Sans Bold',
        color: '#212121',
    },
    subTitle: {
        color: '#707070',
        marginTop: 3
    },
    button: {
        marginTop: 'auto',
        padding: '5%',
        borderRadius: 5,
        marginTop: "25%",
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    resendCode: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 30,
    },
    resendCodeText: {
        fontSize: 16

    },
    otp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    otpButton: {
        padding: '5%',
        borderRadius: 5,
        marginTop: "20%",
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },

    digits: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    number: {
        fontFamily: 'Open Sans Bold',
        fontSize: 30,
        marginTop: 20,
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#013567',
        marginRight: 5,
        backgroundColor: '#0135671A',
        padding: 0,
        textAlign: 'center',
        color: '#212121'
    },
    resetTextStyle: {
        fontFamily: 'Open Sans Regular',
        fontSize: 8,
    },
    success: {
        backgroundColor: '#013567',
        width: '100%',
        paddingTop: '5%',
        paddingBottom: '5%',
    },
    successText: {
        textAlign: 'center', 
        color: '#fff',
        fontFamily: 'Open Sans Bold',
        fontSize: 20
    }

})