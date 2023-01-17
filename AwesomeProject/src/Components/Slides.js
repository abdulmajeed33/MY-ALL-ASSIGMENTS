/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
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
                    bottom: 70,
                }}
                activeDotStyle={{
                    backgroundColor: '#0A61FF',
                    width: 10,
                    bottom: 70,
                }}
                onDone={() => {
                    setShowHomePage(true);
                }}
            />
        );
    }
};

export default Slides;