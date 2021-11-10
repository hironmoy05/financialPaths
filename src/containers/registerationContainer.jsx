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
import { Picker } from '@react-native-picker/picker';
import { View, TouchableOpacity, StyleSheet, Pressable, Linking } from 'react-native';
import {Styles} from '../components/registeration/styles/registeration';
import PhoneInput from 'react-native-phone-number-input';

export const RegisterationContainer = ({navigation}) => {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState();
    const [checked, setChecked] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState([
        'Select Country',
        'India',
        'Pakistan',
        'Nepal',
        'SriLanka',
        'Australia',
        'America',
        'New Zealand'
    ]);

    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);

    return (
        <SafeArea>
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
                    <Login.FormTextInput
                        placeholderTextColor='#C9C9C9'
                        placeholder= "username@email.com"
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
                            selectedValue={selectedCountry}
                            onvValueChange={(itemValue, itemIndex) => 
                                setSelectedCountry(itemValue)
                        }>
                        {
                            selectedCountry.map((list, i) => (
                                <Picker.Item style={{color: '#C9C9C9', fontSize: 14}} key={i} label={list} value={list} />
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

               
                <TouchableOpacity>
                    <Login.FormButton mode='contained'>Registeraton</Login.FormButton>
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
    textInput: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        color: "#D2D2D2",
        backgroundColor: '#fff'
        
    },
  });