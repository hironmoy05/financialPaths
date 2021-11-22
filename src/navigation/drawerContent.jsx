import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple} from 'react-native-paper';
import FinpathLogo from '../assets/finpath_logo2.svg';

export function DrawerContent(props) {
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
                <View style={{borderBottomWidth: 1, color: '#E3EDF3'}}>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/home_1.png')} />}
                        label='Logout'
                        onPress={() => {}}
                    />
                </View>
                <View>
                    <DrawerItem 
                        icon={(color, size) => <Image color={color} size={size} source={require('../assets/icons/home_1.png')} />}
                        label='Sign out'
                        onPress={() => {}}
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
    }

})