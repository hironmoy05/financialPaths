import React, {useState, useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import { HeaderBarContainer } from './headerBarContainer';
import {useNavigation} from '@react-navigation/native';
import Profile from '../assets/profile.svg';
import Email from '../assets/email.svg';
import Mobile from '../assets/mobile.svg';
import Authentication from '../assets/2fa.svg';
import ToggleOn from '../assets/toggle_on.svg';
import ToggleOff from '../assets/toggle_off.svg';
import { AppContext } from '../context/appContext';

export function ProfileContainer() {
    const { name, email } = useContext(AppContext);

    const userName = name._W;
    const userEmail = email._W;

    const navigation = useNavigation();
    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <>
        <HeaderBarContainer navigation={navigation} headerTitle={'My Profile'} profilePage={'profilePage'} profileContainer={'profileContainer'} />

        <View style={{flex: 1, paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#fff', paddingTop: 30}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', fontFamily: 'Open Sans Medium'}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                 <Profile />
                    <Text style={{marginLeft: 10, fontFamily: 'Open Sans Medium', fontSize: 17, color: '#212121'}}>{userName}</Text>
                </View>
                <Text style={{fontFamily: 'Open Sans Medium', color: '#013567'}}>Name</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', fontFamily: 'Open Sans Medium', paddingTop: 40}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Email style={{position: 'relative', top: 5, left: 5}} />
                    <Text style={{marginLeft: 18, fontFamily: 'Open Sans Medium', fontSize: 17, color: '#212121'}}>{userEmail}</Text>
                </View>
                <Text style={{fontFamily: 'Open Sans Medium', color: '#013567'}}>Email</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', fontFamily: 'Open Sans Medium', paddingTop: 40}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Mobile style={{position: 'relative', top: 5, left: 7}} />
                    <Text style={{marginLeft: 18, fontFamily: 'Open Sans Medium', fontSize: 17, color: '#212121'}}>+91 98374 XXXXX</Text>
                </View>
                <Text style={{fontFamily: 'Open Sans Medium', color: '#013567'}}>Mobile</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', fontFamily: 'Open Sans Medium', paddingTop: 40}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Authentication style={{position: 'relative', left: 5}} />
                    <Text style={{marginLeft: 12, fontFamily: 'Open Sans Medium', fontSize: 17, color: '#212121'}}>+91 98374 XXXXX</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{fontFamily: 'Open Sans Medium', color: '#013567', top: 3, marginRight: 15}}>{toggleBtn ? 'Enable' : 'Disable'}</Text>
                    <Pressable onPress={() => setToggleBtn(!toggleBtn)}>{toggleBtn ? <ToggleOn /> : <ToggleOff style={{top: -6}} />}</Pressable>
                </View>
            </View>
        </View>
    </>
    )
}