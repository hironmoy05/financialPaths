import React, { useState, useRef } from 'react';
import { Login } from "../components";
import { SafeArea } from '../components/splash/styles/splash';
import { Registeration } from '../components';
import Email from '../assets/email.svg';
import Country from '../assets/country.svg';
import User from '../assets/user.svg';
import Mobile from '../assets/mobile.svg';
import FinpathLogo1 from '../assets/finpath_logo1.svg';
// import Dropdown from '../assets/drowdown.svg';
import { View, TouchableOpacity, StyleSheet, Dimensions, TextInput, Pressable, Linking, Text, ImageBackgroundBase } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PhoneInput from 'react-native-phone-number-input';
// import { ModalContainer } from './modalCaontainer';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import Cross from '../assets/cross.svg';
import CheckBox from '@react-native-community/checkbox';
import { calcWidth, calcHeight, PixelDeviceHeight, deviceWidth } from '../responsive';


export const RegisterationContainer = ({navigation}) => {
const [text, setText] = useState('');
const [email, setEmail] = useState('');
const [selectedCountry, setSelectedCountry] = useState();

const selectCountry = [
    'Select Country',
    'India',
    'Pakistan',
    'Nepal',
    'SriLanka',
    'Australia',
    'America',
    'New Zealand'
]

const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);
    const [isEmailVerify, setIsEmailVerify] = useState(false);
    const [isPhoneVerify, setIsPhoneVerify] = useState(false);
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
    
    

    return (
            <SafeArea style={{position: 'relative'}}>
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
                                keyboardType='numeric'
                                placeholder='0'
                                returnKeyType="next"
                                value={one}
                                maxLength={1}
                                autoFocus={true}
                                onSubmitEditing={() => secondInputRef.current.focus()}
                                blurOnSubmit={false}
                                />
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={two}
                                maxLength={1}
                                ref={secondInputRef}
                                onSubmitEditing={() => {
                                    thirdInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />
                        
                       
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={three}
                                maxLength={1}
                                ref={thirdInputRef}
                                onSubmitEditing={() => {
                                    fourthInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />

                        
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={four}
                                maxLength={1}
                                ref={fourthInputRef}
                                onSubmitEditing={() => {
                                    fifthInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />

                        
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={five}
                                maxLength={1}
                                ref={fifthInputRef}
                                onSubmitEditing={() => {
                                    sixthInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />

                        
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={six}
                                maxLength={1}
                                ref={sixthInputRef}
                            />
                        </View>
                    <View style={styles.resendCode}>
                        <Pressable onPress={() => console.log('resend code')}><Text style={styles.resendCodeText}>Resend Code</Text></Pressable>
                    </View>
                    <Button onPress={() => setIsEmailVerify(false)} style={styles.button} mode='contained'>Submit</Button>
                </View>
                
            {/* Phone Modal */}
            </Modal>
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
                                onSubmitEditing={() => secondInputRef.current.focus()}
                                blurOnSubmit={false}
                            />
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={two}
                                maxLength={1}
                                ref={secondInputRef}
                                onSubmitEditing={() => {
                                    thirdInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={three}
                                maxLength={1}
                                ref={thirdInputRef}
                                onSubmitEditing={() => {
                                    fourthInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={four}
                                maxLength={1}
                                ref={fourthInputRef}
                                onSubmitEditing={() => {
                                    fifthInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={five}
                                maxLength={1}
                                ref={fifthInputRef}
                                onSubmitEditing={() => {
                                    sixthInputRef.current.focus();
                                }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={styles.number}
                                keyboardType='numeric'
                                placeholder='0'
                                value={six}
                                maxLength={1}
                                ref={sixthInputRef}
                                blurOnSubmit={false}
                            />
                    </View>
                    <View style={styles.resendCode}>
                        <Pressable onPress={() => console.log('resend code')}><Text style={styles.resendCodeText}>Resend Code</Text></Pressable>
                    </View>
                    <Button onPress={() => setIsPhoneVerify(false)} style={styles.button} mode='contained'>Submit</Button>
                </View>
            </Modal>
        
            <Login>
                <Login.SmallLogoBox>
                    <FinpathLogo1 />
                </Login.SmallLogoBox>
            </Login>

            <Login.LoginContainer>
                <Login.LoginFormBox>
                    <Login.LoginTitle>Registration</Login.LoginTitle>
                    <Login.LoginSubTitle>Welcome in Finpath</Login.LoginSubTitle>
                </Login.LoginFormBox>
                <Login.FormBox>
                    <Login.Label>Full Name</Login.Label>
                    <Login.IconBox>
                        <User />
                    </Login.IconBox>
                    <Login.FormTextInput
                        placeholderTextColor='#C9C9C9'
                        placeholder= "Please enter your Name"
                        value={text}
                        name='text'
                        onChangeText={text => setText(text)}
                        />
                </Login.FormBox>
                <Login.FormBox>
                    <Login.Label>Email ID</Login.Label>
                    <Login.IconBox>
                        <Email />
                    </Login.IconBox>
                    <Pressable style={styles.inputTextPosition} onPress={() => setIsEmailVerify(true)}>
                        <Text style={email ? styles.textVerifyShown : styles.textVerify}>Verify</Text>
                    </Pressable>
                    <Login.FormTextInput
                        placeholderTextColor='#C9C9C9'
                        placeholder= "username@email.com"
                        keyboardType='email-address'
                        value={email}
                        name='email'
                        secure={true}
                        onChangeText={email => setEmail(email)}
                    />
                </Login.FormBox>
                <Login.FormBox>
                    <Login.Label>Country</Login.Label>
                    <Login.IconBox>
                        <Country />
                    </Login.IconBox>
                    <Registeration.Frame>
                        <Picker
                            ref={pickerRef}
                            style={{fontFamily:'Opens Sans Serif'}, selectedCountry ? {color: '#212121'} : {color: '#C9C9C9'}, {ImageBackgroundBase: '#fff'}}
                            selectedValue={selectedCountry}
                            onValueChange={(itemValue, itemIndex) => 
                                setSelectedCountry(itemValue)
                        }>
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
                    <Registeration.FormBoxPicker>
                        <Pressable style={styles.phoneTextPosition} onPress={() => setIsPhoneVerify(true)}>
                        <Text style={ phoneNumber ? styles.textVerifyShown : styles.textVerify}>Verify</Text>
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
                                containerStyle={styles.phoneContainer}
                                textContainerStyle={styles.textInput}
                                onChangeFormattedText={text => {
                                setphoneNumber(text);
                                }}
                            />
                        </View>
                    </Registeration.FormBoxPicker>
                </Login.FormBox>

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
                    <Login.FormButton onPress={() => navigation.navigate('Login')} mode='contained'>Registeraton</Login.FormButton>
                </TouchableOpacity>
            </Login.LoginContainer>
                <Login.RegisterTextBox>Already have an account {" "}
                    <Pressable onPress={() => Linking.openURL(`${navigation.navigate('Login')}`)}><Login.ForgotText>Login here</Login.ForgotText></Pressable>
                </Login.RegisterTextBox>
        </SafeArea>
                                
    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      color: "#D2D2D2"
    },
    phoneContainer: {
      width: '100%',
      height: 50,
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
    }
  });