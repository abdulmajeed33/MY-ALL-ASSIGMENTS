/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenB from '../screen/screenB';
import ScreenA from '../screen/screenA';
const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                showLable: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 4,
                    right: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 60,
                },

            }}
        >
            <Tab.Screen name="screenA" component={ScreenA}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../../assets/icons8-home-page-50.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="screenB" component={ScreenB}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../../assets/icons8-home-page-50.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({

});

export default TabBar;
