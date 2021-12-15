import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { HeaderBarContainer } from './headerBarContainer';
import { Styles } from '../styles';
import Term from '../assets/term.svg';
import Fees from '../assets/fees.svg';
import Security from '../assets/security.svg';
import PrivacySetting from '../assets/privacy_settings.svg';
import Dropdown from '../assets/dropdown.svg';

export function SettingsContainer () {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <HeaderBarContainer headerTitle={'Settings'} buyContainer={Styles.flatHeader} />

                <View style={Styles.settingsContainer}>
                    <Text style={Styles.settingTitle}>Settings</Text>
                    <Text style={Styles.settingSubTitle}>Manage app settings</Text>
                </View>

            <View style={Styles.settingsContainer}>
                <Pressable style={Styles.settingBox} onPress={() => console.log('Pressed')}>
                        <View style={Styles.settingRight}>
                            <Term />
                            <Text style={Styles.settingText}>Terms & Condition</Text>
                        </View>
                        <Dropdown style={Styles.settingDropIcon} />
                </Pressable>

                <View style={Styles.settingDivider}></View>
               
                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => console.log('Pressed')}>
                        <View style={Styles.settingRight}>
                            <Term />
                            <Text style={Styles.settingText}>Privacy Policy</Text>
                        </View>
                        <Dropdown style={Styles.settingDropIcon} />
                </Pressable>

                <View style={Styles.settingDivider}></View>
                
                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => console.log('Pressed')}>
                        <View style={Styles.settingRight}>
                            <Security style={Styles.passwordSettingLogo} />
                            <Text style={[Styles.settingText, Styles.passwordSettingText]}>Change Password</Text>
                        </View>
                        <Dropdown style={[Styles.settingDropIcon, Styles.settingDropIconPos]} />
                </Pressable>

                <View style={[Styles.settingDivider, Styles.settingDividerHeight]}></View>

                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => console.log('Pressed')}>
                        <View style={Styles.settingRight}>
                            <Term style={Styles.securitySettingLogo} />
                            <Text style={[Styles.settingText, Styles.securitySettingText]}>Security</Text>
                        </View>
                        <Dropdown style={Styles.settingDropIcon} />
                </Pressable>

                <View style={Styles.settingDivider}></View>

               
                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => console.log('Pressed')}>
                        <View style={Styles.settingRight}>
                            <Fees style={Styles.feesSettingLogo} />
                            <Text style={[Styles.settingText, Styles.feesSettingText]}>Fees & Limits</Text>
                        </View>
                        <Dropdown style={[Styles.settingDropIcon, Styles.feesSettingDropIcon]} />
                </Pressable>

                <View style={[Styles.settingDivider, Styles.feesSettingDivider]}></View>

               
            </View>            
        </SafeAreaView>
    )
}
