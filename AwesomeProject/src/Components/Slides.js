/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";




const slides = [
    {
        id: 1,
        title: 'Tell us what to look for',
        description1: 'To start finding your data, we will ask for four basic details about you.',
        description2: ' Don’t worry - we ask for permission - and only use these details to search, then make requests to delete your data.',
        image: require('../../assets/HomePage/polygon.png')
    },
    {
        id: 2,
        title: 'Search all data brokers',
        description1: 'After you give us permission, we search our catalog of data broker companies for your information.',
        description2: 'You’ll get a full list of each one and which information they have.',
        image: require('../../assets/HomePage/polygon.png')
    },
    {
        id: 3,
        title: 'Start removing your data',
        description1: 'We show you what data is stored in their company - like your address or financial details - and what you can do about it.',
        description2: 'You can choose to communicate with each company or have us do it for you.',
        image: require('../../assets/HomePage/polygon.png'),
    }
]

const Slides = () => {
    const [showHomePage, setShowHomePage] = useState(false);


    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            flex: 6,
                            top: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#rgba(255, 255, 240, 1)',
                        }}>
                            <Image
                                source={item.image}
                            />
                            <View style={{
                                flex: 1,
                                width: 296,
                                height: 24,
                                backgroundColor: '#rgba(255, 255, 240, 1)',
                            }}>
                                <Text style={{
                                    top: 5,
                                    fontSize: 20,
                                    color: '#252A31',
                                    fontFamily: 'SF Pro Display',
                                    textAlign: 'center',
                                    lineHeight: 30,
                                    fontWeight: 'bold',
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#252A31',
                                    fontFamily: 'SF Pro Display',
                                    textAlign: 'center',
                                    paddingTop: 10,
                                    lineHeight: 20,
                                }}>
                                    {item.description1}
                                </Text>
                                <Text style={{
                                    top: 18,
                                    fontSize: 16,
                                    color: '#252A31',
                                    fontFamily: 'SF Pro Display',
                                    textAlign: 'center',
                                }}>
                                    {item.description2}
                                </Text>
                            </View>
                        </View>
                    );
                }}
                dotStyle={{
                    width: 10,
                    backgroundColor: '#0A61FF',
                    opacity: 0.2,
                    bottom: 100,
                }}
                activeDotStyle={{
                    backgroundColor: '#0A61FF',
                    width: 10,
                    bottom: 100,
                }}
                onDone={() => {
                    setShowHomePage(true);
                }}
            />
        );
    }
};

export default Slides;