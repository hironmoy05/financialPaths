import React, {useState, useEffect} from 'react';
import { Splash } from '../components';
import FinpathLogo from '../assets/finpath_logo.svg';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const SplashContainer = ({navigation}) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);

            // Check if user_id is set or not
            AsyncStorage.multiGet(['userEmail', 'userName']).then(value => value.forEach(item => {
                if (item[1]) {
                    navigation.navigate('Drawer')
                } else {
                    navigation.navigate('HomeScreen');
                }
            }));
        }, 5000)
    }, []);

    return (
        <Splash>
            <Splash.Container>
                <Splash.LogoBox>
                    <FinpathLogo />
                </Splash.LogoBox>
                <ActivityIndicator 
                animating={animating}
                color='#fff'
                size='large'
                style={styles.activityIndicator}
                />
            </Splash.Container>
        </Splash>
    )
}

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    }
})