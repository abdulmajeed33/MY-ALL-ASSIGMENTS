/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MashButton from '../Components/CustomButton';
import { deviceWidth, deviceHeight } from '../Components/dimenstion';
import { Image } from 'react-native';


const HomeScreen = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('ScreenA');
    };

    return (
        <>
            <View style={styles.body}>
                <View style={{ top: 26, flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                        }} >Data Removal
                        </Text>
                        <View style={{ left: 100, justifyContent: 'flex-end' }}>
                            <Pressable onPress={() => onPressHandler()}>
                                <Image source={require('../../assets/HomePage/Cross.png')} />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#rgba(255, 255, 240, 1)',
                }}>
                    <Image source={require('../../assets/HomePage/polygon.png')} />
                    <View style={{
                        flex: 1,
                        width: 296,
                        height: 24,
                        backgroundColor: '#rgba(255, 255, 240, 1)',
                    }}>
                        <Text style={{
                            top: 24,
                            fontSize: 20,
                            color: '#252A31',
                            fontFamily: 'SF Pro Display',
                            textAlign: 'center',
                            lineHeight: 30,
                            fontWeight: 'bold',
                        }}>Tell us what to look for</Text>
                        <Text style={{
                            top: 26,
                            fontSize: 16,
                            color: '#252A31',
                            fontFamily: 'SF Pro Display',
                            textAlign: 'center',
                        }}>
                            To start finding your data, we will ask for four basic details about you.
                        </Text>
                        <Text style={{
                            top: 40,
                            fontSize: 16,
                            color: '#252A31',
                            fontFamily: 'SF Pro Display',
                            textAlign: 'center',
                        }}>
                            Don’t worry - we ask for permission - and only use these details to search, then make requests to delete your data.
                        </Text>
                        <View style={styles.indicatorContainer}>
                            <View style={styles.currentIndicator} />
                            <View style={styles.indicator} />
                            <View style={styles.indicator} />
                        </View>
                        <Text style={{
                            top: 90,
                            fontSize: 16,
                            color: '#252A31',
                            fontFamily: 'SF Pro Display',
                            textAlign: 'center',
                        }}>
                            <MashButton title={'Continue'} color={'rgba(255, 186, 36, 1)'}
                                style={{
                                    width: 264,
                                    height: 48,
                                    alignItems: 'center',
                                    borderRadius: 40,
                                }} onPressFunction={onPressHandler} text={{
                                    color: '#252A31',
                                    fontSize: 20,
                                    margin: 10,
                                    textAlign: 'center',
                                }} />

                        </Text>
                        <Text style={{
                            top: 105,
                            fontSize: 16,
                            color: '#252A31',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                            Create my profile
                        </Text>
                    </View>
                </View>
            </View >
        </>
    );
};

export default HomeScreen;




const styles = StyleSheet.create({
    body: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#rgba(255, 255, 240, 1)',
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        borderRadius: 40,
    },
    indicatorContainer: {
        top: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentIndicator: {
        height: 6,
        width: 6,
        borderRadius: 6,
        backgroundColor: 'rgba(10, 97, 255, 1)',
        marginHorizontal: 5,
    },
    indicator: {
        height: 6,
        width: 6,
        borderRadius: 6,
        backgroundColor: '#0A61FF',
        opacity: 0.2,
        marginHorizontal: 5,
    },
});




{/* <Pressable onPress={onPressHandler}
    style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}> </Pressable> */}