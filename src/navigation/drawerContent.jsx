import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { Title, Caption, Drawer } from 'react-native-paper';
import FinpathLogo from '../assets/finpath_logo2.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function DrawerContent(props) {

    function handleLogout() {
        AsyncStorage.clear();
        return props.navigation.replace('Login');
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.drawerLogoBox}>
                            <View style={styles.drawerLogo}>
                                <FinpathLogo />
                            </View>
                        </View>
                        <View style={styles.userInfoText}>
                            <Title style={styles.title}>User Name</Title>
                            <Caption style={styles.caption}>username@gmail.com</Caption>
                        </View>
                    </View>
                </View>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/home.png')} />}
                        label='Home'
                        labelStyle={styles.label}
                        onPress={() => {}}
                    />
                </View>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/profile.png')} />}
                        label='Profile'
                        labelStyle={styles.label}
                        onPress={() => {}}
                    />
                </View>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/kyc.png')} />}
                        label='KYC Verification'
                        labelStyle={styles.label}
                        onPress={() => {}}
                    />
                </View>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/bank.png')} />}
                        label='Bank Account'
                        labelStyle={styles.label}
                        onPress={() => {}}
                    />
                </View>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/gift_card.png')} />}
                        label='Gifting Card Coupns'
                        labelStyle={styles.label}
                        onPress={() => {}}
                    />
                </View>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/settings.png')} />}
                        label='Settings'
                        labelStyle={styles.label}
                        onPress={() => {}}
                    />
                </View>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/support.png')} />}
                        label='Supports'
                        labelStyle={styles.label}
                        onPress={() => {}}
                    />
                </View>
                <View style={styles.drawerDivider}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/logout.png')} />}
                        labelStyle={{color: '#FE1D1D', marginLeft: -14}}
                        label='Logout'
                        onPress={() => handleLogout()}
                    />
                </View>
            </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    drawerLogoBox: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#fff',
        overflow: 'hidden',
        position: 'relative',
    },
    drawerLogo: {
        position: 'absolute',
        top: '12%',
        left: '20%',
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: '#013567',
        marginTop: -5,
        paddingTop: '15%',
        paddingBottom: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3EDF3'
    },
    userInfoText: {
        marginLeft: '5%',
    },
    title: {
        fontFamily: 'Open Sans Bold',
        color: '#fff',
        fontSize: 17,
    },
    caption: {
        color: '#fff',
        fontFamily: 'Open Sans Regular',
        opacity: .8,
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    label: {
        fontFamily: 'Open Sans Regular',
        color: '#212121',
        marginLeft: -14
    }
})