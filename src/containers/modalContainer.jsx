import React from 'react';
import { View, Text, StyleSheet, textInput,Linking, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import Cross from '../assets/cross.svg';

export const ModalContainer = () => {
    return (
        <View style={{position: 'relative'}, {display: 'flex'}, {zIndex: 300}}>
            <View style={styles.popup}>
            <View style={styles.cross}>
                <Cross />
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
                    <View style={styles.box}>
                        <textInput style={styles.inputBox} placeholder='0' />
                    </View>

                    <View style={styles.box}>
                        <textInput style={styles.inputBox} placeholder='0' />
                    </View>
                    
                    <View style={styles.box}>
                        <textInput style={styles.inputBox} placeholder='0' />
                    </View>

                    <View style={styles.box}>
                        <inputText style={styles.inputBox} placeholder='0' />
                    </View>
                
                    <View style={styles.box}>
                        <textInput style={styles.inputBox} placeholder='0' />
                    </View>

                    <View style={styles.box}>
                        <textInput style={styles.inputBox} placeholder='0' />
                    </View>
                </View>
                <View style={styles.resendCode}>
                    <Pressable onPress={() => Linking.openURL('resend code')}><Text style={styles.resendCodeText}>Resend Code</Text></Pressable>
                </View>
                <Button style={styles.button} mode='contained' onPress={() => setIsVerify(false)}>Submit</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#000',
        opacity: .5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    popup: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        height: 400,
        marginTop: 270,
        backgroundColor: '#fff',
        padding: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative'
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
        justifyContent: 'center'
    },
    box: {
        width: 45,
        height: 45,
        backgroundColor: '#0135671A',
        borderWidth: 1,
        borderColor: '#013567',
        borderRadius: 5,
        marginRight: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    inputBox: {
        width: '100%'
    },

    cross: {
        position: 'absolute',
        zIndex: 400,
        top: 0,
        right: 0,
        width: 40,
        height: 40
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
    },
    number: {
        fontFamily: 'Open Sans Bold',
        fontSize: 30,
        color: '#013567',
    },
})