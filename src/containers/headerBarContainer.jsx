import React, {useContext} from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderBar } from '../components';
import Back from '../assets/back.svg';
import Edit from '../assets/edit.svg';
import ProfileLogo from '../assets/profile_logo.svg';
import Done from '../assets/done.svg';
import Camera from '../assets/camera.svg';
import { AppContext } from '../context/appContext';

export const HeaderBarContainer = (props) => {
    const { name, email } = useContext(AppContext);

    const userName = name._W;
    const userEmail = email._W;

    const navigation = useNavigation();
    let Header;

    switch (props.headerTitle) {
        case 'Buy Coin':
            Header = 'Buy Coin'
        break;
        case 'Sell Coin':
            Header = 'Sell Coin'
        break;
        case 'Send Coin':
            Header = 'Send Coin'
        break;
        case 'My Profile':
            Header = 'My Profile'
        break;
        case 'KYC Verification':
            Header = 'KYC Verification'
        break;
        case 'Bank Accounts':
            Header = 'Bank Accounts'
        break;
        case 'Gift Card':
            Header = 'Gift Card'
        break;
        case 'Settings':
            Header = 'Settings'
        break;
        case 'Supports':
            Header = 'Supports'
        break;
        case 'New Bank Accounts':
            Header = 'New Bank Accounts'
        break;
        case 'Terms & Condition':
            Header = 'Terms & Condition'
        break;
        case 'Privacy Policy':
            Header = 'Privacy Policy'
        break;
        default: 
            Header = 'Bitcoin Balance'
        break;
    }

    return (
        <HeaderBar buyContainer={props.buyContainer} profileContainer={props.profileContainer}>
            <Pressable style={[styles.backButton, {top: props.profilePage ? '10.5%' : '65%'}]} onPress={() => navigation.goBack()}>
                <Back />
            </Pressable>
            <HeaderBar.Container>
                <HeaderBar.BitCoinTitle>{Header}</HeaderBar.BitCoinTitle>
                {
                    props.profilePage && <Pressable onPress={() => props.navigation.navigate('Profile2')} style={{marginLeft: 'auto', paddingRight: '5%', top: -33}}>
                    {props.profilePage2 ? <Done /> : <Edit />}
                    </Pressable>
                }      
            </HeaderBar.Container>

            {
                props.profilePage && (
                    <>
                    <View style={{display: 'flex', alignItems: 'center',marginTop: 20}}>
                        {props.profilePage2 ? (
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: -30}}>
                            <View style={{backgroundColor: '#fff', width: 150, height: 150, borderRadius: 100}}><ProfileLogo style={{position: 'absolute', top: '25%', left: '25%'}} /></View>
                            <View style={{position: 'absolute', right: 3, bottom: -4, borderWidth: 2, borderColor: '#013567', borderRadius: 100}}>
                                <Pressable onPress={() => console.log('camera')}><Camera /></Pressable>
                            </View>
                        </View>
                         ) : <ProfileLogo />}
                        {
                            props.profilePage2 ? null : (
                            <>
                                <Text style={{color: '#fff', fontFamily: 'Open Sans Bold', fontSize: 17, marginTop: 5}}>{userName}</Text>
                                <Text style={{color: '#fff', opacity: .5, fontFamily: 'Open Sans Bold', fontSize: 17, marginTop: 5}}>{userEmail}</Text>
                            </>
                            )
                        }
                    </View>
                    </>
                )
            }
        </HeaderBar>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        paddingLeft: '12%',
    },
})