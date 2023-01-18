/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import MashButton from '../Components/MashButton';
import { deviceWidth, deviceHeight } from '../Components/dimenstion';
import { Image } from 'react-native';
import Slides from '../Components/Slides';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import showToast from '../const/showToast';



const OnBoardScreen = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('Pure_Privicy');
    };


    return (
        <View style={styles.body}>
            <View style={{ top: 26, flex: 0.1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text} >Data Removal</Text>
                    <View style={{ left: 100, justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => onPressHandler()}>
                            <Image source={require('../assets/HomePage/Cross.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Commponent */}
            <Slides />
            <Toast />

            <View style={{
                bottom: 90,
                fontSize: 16,
                color: '#252A31',
                fontFamily: 'SF Pro Display',
                alignItems: 'center',
            }}>
                <MashButton title={'Continue'} color={'rgba(255, 186, 36, 1)'}
                    style={styles.buttonBody} onPressFunction={onPressHandler} text={styles.buttonText} />
            </View>
            <TouchableOpacity onPress={showToast}>


                <Text style={styles.bttomText}>
                    Create my profile
                </Text>
            </TouchableOpacity>

        </View >

    );
};

export default OnBoardScreen;


const styles = StyleSheet.create({
    body: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#rgba(255, 255, 240, 1)',
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonBody: {
        width: 264,
        height: 48,
        alignItems: 'center',
        borderRadius: 40,

    },
    buttonText: {
        color: '#252A31',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    bttomText: {
        bottom: 50,
        fontSize: 16,
        color: '#252A31',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});