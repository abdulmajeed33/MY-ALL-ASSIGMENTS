/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { deviceWidth } from '../Components/dimenstion';
import ActivityFeed from '../screen/ActivityFeed';

import DataRemoval from '../screen/DataRemoval';
import Pure_Privicy from '../screen/PurePrivicy';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { bottom: 5, fontSize: 12 },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#FFF7E7',
                    height: 64,
                    width: deviceWidth,
                },
            }}
        >
            <Tab.Screen name="PurePrivicy" component={Pure_Privicy}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/TabNavigation/Privicy.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    // tintColor: focused ? '#0A61FF' : '#748c94',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Data Removal" component={DataRemoval}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/TabNavigation/Data.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    // tintColor: focused ? '#0A61FF' : '#748c94',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Activity Feed" component={ActivityFeed}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/TabNavigation/Activity.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    // tintColor: focused ? '#0A61FF' : '#748c94',
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator >
    );
};

const styles = StyleSheet.create({

});

export default TabBar;
