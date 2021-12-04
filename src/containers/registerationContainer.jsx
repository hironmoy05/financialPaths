import React, { useState, useRef, useEffect } from 'react';
import { Login } from "../components";
import { SafeArea } from '../components/splash/styles/splash';
import { Registeration } from '../components';
import Email from '../assets/email.svg';
import Country from '../assets/country.svg';
import VerifyCheck from '../assets/verify_check.svg';
import User from '../assets/user.svg';
import Mobile from '../assets/mobile.svg';
import FinpathLogo1 from '../assets/finpath_logo1.svg';
import { View, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, TextInput, Pressable, Text } from 'react-native';
import Success from '../assets/success.svg';
import { Picker } from '@react-native-picker/picker';
import PhoneInput from 'react-native-phone-number-input';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import Cross from '../assets/cross.svg';
import CheckBox from '@react-native-community/checkbox';
import { PixelDeviceHeight, deviceWidth, deviceHeight } from '../responsive';
import Loader from './loaderContainer';


export const RegisterationContainer = ({navigation}) => {
    const [userName, setUserName] = useState('');    
    const [userEmail, setUserEmail] = useState('');
    const [selectedCountry, setSelectedCountry] = useState();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [isEmailVerify, setIsEmailVerify] = useState(false);
    const [isPhoneVerify, setIsPhoneVerify] = useState(false);
    const [emailOtpVerified, setEmailOtpVerified] = useState(false);
    const [phoneOtpVerified, setPhoneOtpVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [isRegisterationSuccess, setIsRegisterationSuccess] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [nameInputColor, setNameInputColor] = useState(false);
    const [regEmailInputColor, setRegEmailInputColor] = useState(false);
    const [selectCountryInputColor, setSelectCountryInputColor] = useState(false);
    const [phoneNumberInputColor, setPhoneNumberInputColor] = useState(false);
    const [regPasswordInputColor, setRegPasswordInputColor] = useState(false);
    const [regRetypePasswordInputColor, setRegRetypePasswordInputColor] = useState(false);
    const [buttonInputColor, setButtonInputColor] = useState(false);


const selectCountry = [
    'India',
    'Pakistan',
    'Nepal',
    'SriLanka',
    'Australia',
    'America',
    'New Zealand'
]

const down = {
    top: '45px',
}

const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

    
const phoneInput = useRef(null);

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

const containerHeight = {
    top: '16%'
}

const url = 'https://www.finpath.oyeapps.com/RestApiV1/user_register';

const handleSubmitButton = () => {
    setErrorText('');
    if (!userName) {
        alert('Please Enter Name');
    }

    if (!userEmail) {
        alert('Please Enter Email');
    }

    if (!selectedCountry) {
        alert('Please Select Country');
    }

    if (!phoneNumber) {
        alert('Please enter your phone number')
    }

    if (!password) {
        alert('Please Enter Password')
    }

    if (!retypePassword) {
        alert('Please Enter Retype Password');
    }

    //  else if ( password === retypePassword) {
    //     alert('Password mismatch');
    // }
    if (!toggleCheckBox) {
        alert('Please check the checkbox');
    }

    setLoading(true);

    let dataToSend = {
        name: userName,
        email: userEmail,
        country: selectedCountry,
        mobile: phoneNumber,
        password: password,
    }

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
        .then(res => res.json())
        .then(json => {
            setLoading(false);
            console.log(json)

            // if data is matched
            if (json.Status === 'Success') {
                setIsRegisterationSuccess(true);
                alert('Registration Successful. Please login to proceed');
            } else {
                console.log(json.Status)
                setErrorText(json);
            }
        })
        .catch(error => {
            setLoading(false);
            console.log(error);
        });
};

// if (isRegisterationSuccess) {
//     return (
//         <View style={{flex: 1, backgroundColor: '#013567', justifyContent: 'center'}}>
//             <View style={{height: 150, alignSelf: 'center'}}><Success /></View>
//             <Text style={styles.successTextStyle}>Registeration Successfull</Text>
//             <TouchableOpacity 
//                 style={styles.buttonStyle}
//                 activeOpacity={0.5}
//                 onPress={() => navigation.navigate('Login')}
//             >
//             <Text style={styles.buttonTextStyle}>Login Now</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

function handleEmailModal() {
    const numArr = [one, two, three, four, five, six];
    const numOtp = numArr.join('');

    if (numOtp === '111111') {
        setEmailOtpVerified(true);
    }
    setOne();
    setTwo();
    setThree();
    setFour();
    setFive();
    setSix();
    return setIsEmailVerify(false);
}

function handlePhoneModal() {
    const numArr = [one, two, three, four, five, six];
    const numOtp = numArr.join('');

    if (numOtp === '111111') {
        setPhoneOtpVerified(true);
    }
    setOne();
    setTwo();
    setThree();
    setFour();
    setFive();
    setSix();
    return setIsPhoneVerify(false);
}

useEffect(() => {
    userName ? setNameInputColor(true) : setNameInputColor(false);
    userEmail ? setRegEmailInputColor(true) : setRegEmailInputColor(false);
    selectedCountry ? setSelectCountryInputColor(true) : setRegEmailInputColor(false);
    phoneNumber ? setPhoneNumberInputColor(true) : setPhoneNumberInputColor(false);
    password ? setRegPasswordInputColor(true) : setRegPasswordInputColor(false);
    retypePassword ? setRegRetypePasswordInputColor(true) : setRegRetypePasswordInputColor(false);    
    userName && userEmail && selectedCountry && phoneNumber && password && retypePassword ? setButtonInputColor(true) : setButtonInputColor(false);
})

    return (
        <SafeArea style={{position: 'relative'}}>
            <Loader loading={loading} />
            <Modal 
                isVisible={isEmailVerify}
                deviceHeight={PixelDeviceHeight}
                deviceWidth={deviceWidth}
                style={{margin: 0}}
            >
            <View style={styles.popup}>
                <View style={styles.cross}>
                    <Pressable onPress={() => setIsEmailVerify(false)}>
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
                        ref={firstInputRef}
                        keyboardType='numeric'
                        placeholder='0'
                        returnKeyType='next'
                        value={one}
                        maxLength={1}
                        autoFocus={true}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setOne(num)
                            num && secondInputRef.current.focus();
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
                        onChangeText={num => {
                           setTwo(num)
                           num && thirdInputRef.current.focus();
                        }}
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
            <Button onPress={() => handleEmailModal()} style={styles.button} mode='contained'>Submit</Button>
        </View>
        </Modal>
            
        {/* Phone Modal */}
            <Modal 
            isVisible={isPhoneVerify}
            deviceHeight={PixelDeviceHeight}
            deviceWidth={deviceWidth}
            style={{margin: 0}}
            >
            <View style={styles.popup}>
                <View style={styles.cross}>
                    <Pressable onPress={() => setIsPhoneVerify(false)}>
                        <Cross />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.title}>Phone Verify</Text>
                    <Text style={styles.subTitle}>Please enter the verification code to Verify Email ID we just sent you.</Text>
                </View>
                <View style={styles.otp}>
                    <Text>Enter OTP</Text>
                    <Text>Time Left: 00:02</Text>
                </View>
                <View style={styles.digits}>
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
                        value={one}
                        maxLength={1}
                        autoFocus={true}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setOne(num)
                            num && secondInputRef.current.focus();
                        }}
                    />
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
                        value={two}
                        maxLength={1}
                        ref={secondInputRef}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setTwo(num)
                            num && thirdInputRef.current.focus();
                        }}
                    />
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
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
                        value={five}
                        maxLength={1}
                        ref={fifthInputRef}
                        blurOnSubmit={false}
                        onChangeText={num => {
                            setFive(num)
                            num && sixthInputRef.current.focus();
                        }}
                    />
                    <TextInput style={styles.number}
                        keyboardType='numeric'
                        placeholder='0'
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
                <Button onPress={() => handlePhoneModal()} style={styles.button} mode='contained'>Submit</Button>
            </View>
        </Modal>
        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            contentContainerStyle='position'
            keyboardVerticalOffset='0'
        >
            <ScrollView
                 keyboardShouldPersistTaps="handled"
                 containerStyle={{
                   flex: 1,
                   justifyContent: 'center',
                   alignContent: 'center',
                 }}
            >
                <View style={{height: deviceHeight + 250}}>
                <Login>
                    <Login.SmallLogoBox>
                        <FinpathLogo1 />
                    </Login.SmallLogoBox>
                </Login>

                <Login.LoginContainer containerHeight={containerHeight}>
                    <Login.LoginFormBox>
                        <Login.LoginTitle>Registration</Login.LoginTitle>
                        <Login.LoginSubTitle>Welcome in Finpath</Login.LoginSubTitle>
                    </Login.LoginFormBox>
                    <Login.FormBox>
                        <Login.Label>Full Name</Login.Label>
                        <Login.IconBox>
                            <User />
                        </Login.IconBox>
                        <Login.NameTextInput
                            nameInputColor={nameInputColor}
                            placeholderTextColor='#C9C9C9'
                            placeholder= "Please enter your Name"
                            value={userName}
                            returnKeyType='next'
                            name='userName'
                            onChangeText={name => setUserName(name)}
                            />
                    </Login.FormBox>
                    <Login.FormBox>
                        <Login.Label>Email ID</Login.Label>
                        <Login.IconBox>
                            <Email />
                        </Login.IconBox>
                        <Pressable style={styles.inputTextPosition} onPress={() => setIsEmailVerify(true)}>
                            {emailOtpVerified ? <View style={{top: 4}}><VerifyCheck /></View> :  <Text style={userEmail ? styles.textVerifyShown : styles.textVerify}>Verify</Text>}
                        </Pressable>
                        <Login.RegEmailTextInput
                            regEmailInputColor={regEmailInputColor}
                            placeholderTextColor='#C9C9C9'
                            placeholder= "username@email.com"
                            keyboardType='email-address'
                            value={userEmail}
                            name='userEmail'
                            secure={true}
                            onChangeText={email => setUserEmail(email)}
                        />
                    </Login.FormBox>
                    <Login.FormBox>
                        <Login.Label>Country</Login.Label>
                        <Login.IconBox down={down}>
                            <Country />
                        </Login.IconBox>
                        <Registeration.Frame selectCountryInputColor={selectCountryInputColor}>
                            <Picker
                                ref={pickerRef}
                                style={{fontFamily:'Opens Sans Serif'}, {marginLeft: -13}}
                                selectedValue={selectedCountry}
                                onValueChange={(itemValue, itemIndex) => 
                                    setSelectedCountry(itemValue)
                            }>
                                <Picker.Item style={{color: selectCountryInputColor ? '#013567' : '#C9C9C9'}} label={'Select Country'} enabled={false} />
                            {
                                selectCountry.map((list, i) => (
                                    <Picker.Item style={{color: '#212121', fontSize: 14}} key={i} label={list} value={list.toString()} />
                                ))
                            }
                            </Picker>
                        </Registeration.Frame>
                    </Login.FormBox>
                    <Login.FormBox>
                            <Login.Label>Mobile</Login.Label>
                            <Login.IconBox>
                                <Mobile />
                            </Login.IconBox>
                        <Registeration.FormBoxPicker phoneNumberInputColor={phoneNumberInputColor}>
                            <Pressable style={styles.phoneTextPosition} onPress={() => setIsPhoneVerify(true)}>
                            {phoneOtpVerified ? <View style={{top: 4}}><VerifyCheck /></View> : <Text style={phoneNumber ? styles.textVerifyShown : styles.textVerify}>Verify</Text>}
                        </Pressable>
                            <View style={styles.container}>
                                <PhoneInput 
                                    ref={phoneInput}
                                    defaultValue={phoneNumber}
                                    placeholder='Please enter phone number'
                                    defaultCode="IN"
                                    layout="second"
                                    codeTextStyle={styles.container}
                                    textInputStyle={styles.textInput}
                                    containerStyle={{width: '100%', height: 50}}
                                    textContainerStyle={styles.textInput}
                                    onChangeFormattedText={text => {
                                    setPhoneNumber(text);
                                    }}
                                />
                            </View>
                        </Registeration.FormBoxPicker>
                    </Login.FormBox>
                    <Login.FormBox>
                        <Login.Label>Password</Login.Label>
                        <Login.IconBox>
                            <User />
                        </Login.IconBox>
                        <Login.RegPasswordTextInput
                            regPasswordInputColor={regPasswordInputColor}
                            placeholderTextColor='#C9C9C9'
                            placeholder= "Please enter password"
                            value={password}
                            name='text'
                            onChangeText={password => setPassword(password)}
                            />
                    </Login.FormBox>
                    <Login.FormBox>
                        <Login.Label>Retype Password</Login.Label>
                        <Login.IconBox>
                            <User />
                        </Login.IconBox>
                        <Login.RegRetypePasswordTextInput
                            regRetypePasswordInputColor={regRetypePasswordInputColor}
                            placeholderTextColor='#C9C9C9'
                            placeholder= "Retype password"
                            value={retypePassword}
                            name='retypePassword'
                            onChangeText={password => setRetypePassword(password)}
                            />
                    </Login.FormBox>
                    {errorText != '' ? (
                        <Text style={styles.errorTextStyle}>
                            {errorText}
                        </Text>
                        ) : null
                    }

                <View style={[{display: 'flex'}, {flexDirection: 'row'}, {marginTop: '5%'}]}>
                    <CheckBox
                    disabled={false}
                    tintColor= '#121212'
                    value={toggleCheckBox}
                    onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                    />
                    <Text style={[{width: '80%'}, {color:'#707070'}, {marginLeft: '6%'}]}>By registering an account you agree to our 
                    <Pressable onPress={() => console.log('Terms and Conditions')}><Text style={[{color: '#013567'}, {fontFamily: 'Open Sans Bold'}]}>Terms of Service</Text></Pressable> and 
                    <Pressable onPress={() => console.log('Privacy Policy')}><Text style={[{color: '#013567'}, {fontFamily: 'Open Sans Bold'}]}>Privacy Policy</Text></Pressable>
                    </Text>
                </View>
                
                <TouchableOpacity>
                    <Login.RegFormButton buttonInputColor={buttonInputColor} onPress={() => handleSubmitButton()} mode='contained'>Registeraton</Login.RegFormButton>
                </TouchableOpacity>
                </Login.LoginContainer>
                <Login.LoginBox>
                    <Login.RegisterTextBox>Already have an account {" "}</Login.RegisterTextBox>
                    <Login.RegisterTextBox><Pressable onPress={() => navigation.navigate('Login')}><Login.ForgotText>Login here</Login.ForgotText></Pressable></Login.RegisterTextBox>
                </Login.LoginBox>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeArea>               
)
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      color: '#013567',
    },
    button: {
        marginTop: 30,
        width: '75%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    textInputSelect: {
        color: '#212121'
    },  

    textInput: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        color: "#212121",
    },

    inputTextPosition: {
        position: 'absolute',
        zIndex: 20,
        right: 20,
        top: 40,
    },  
    
    textVerify: {
        display: 'none'
    },

    textVerifyShown: {
        fontFamily: 'Open Sans Bold',
        color: '#013567',
        letterSpacing: 2,
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
        fontSize: 30,
        fontFamily: 'Open Sans Bold',
        color: '#212121',
    },
    subTitle: {
        color: '#707070',
        marginTop: 6
    },
    otp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20


    },
    digits: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    box: {
        // width: 45,
        // height: 45,
        backgroundColor: '#0135671A',
        borderWidth: 1,
        borderColor: '#013567',
        borderRadius: 5,
        marginRight: 10,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resendCode: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 30,
    },
    resendCodeText: {
        fontSize: 16

    },
    button: {
        marginTop: 'auto',
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#013567',
        marginTop: 20
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
    phoneTextPosition: {
        position: 'absolute',
        zIndex: 200,
        top: 15,
        right: 20,
    },



    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },

    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
      successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
      },
  });