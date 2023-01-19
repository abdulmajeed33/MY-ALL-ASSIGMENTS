/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import slidesData from '../const/slidesData';



const Slides = () => {
    const [showHomePage, setShowHomePage] = useState(false);

    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slidesData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.body}>
                            <Image
                                source={item.image}
                            />
                            <View style={styles.textBody}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.description1}>
                                    {item.description1}
                                </Text>
                                <Text style={styles.description2}>
                                    {item.description2}
                                </Text>
                            </View>
                        </View>
                    );
                }}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activedotStyle}
            />
        );
    }
};

export default Slides;

const styles = StyleSheet.create({
    body: {
        flex: 6,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#rgba(255, 255, 240, 1)',
    },
    textBody: {
        flex: 1,
        width: 296,
        height: 148,
        backgroundColor: '#rgba(255, 255, 240, 1)',
    },
    title: {
        top: 10,
        fontSize: 16,
        color: '#252A31',
        fontFamily: 'SF Pro Display',
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold',
    },
    description1: {
        top: 5,
        fontSize: 16,
        color: '#252A31',
        fontFamily: 'SF Pro Display',
        textAlign: 'center',
        paddingTop: 10,
        lineHeight: 20,
    },
    description2: {

        top: 18,
        fontSize: 16,
        color: '#252A31',
        fontFamily: 'SF Pro Display',
        textAlign: 'center',

    },
    dotStyle: {
        width: 10,
        backgroundColor: '#0A61FF',
        opacity: 0.2,
        bottom: 70,
    },
    activedotStyle: {
        backgroundColor: '#0A61FF',
        width: 10,
        bottom: 70,
    }
})