/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { deviceWidth, deviceHeight } from '../Components/dimenstion';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';


const ServicesList = ({ item }) => {
    return (
        <View style={{ backgroundColor: '#FFFFF0', height: deviceHeight, width: deviceWidth }}>
            <View style={style.serv_list}>
                <Image source={item.image} style={{ height: 55, width: 55 }} />
                <View
                    style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                    <Text style={{ fontSize: 13, color: 'grey' }}>
                        {item.text}
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.ingredients}</Text>
                </View>
                <View style={{}}>
                    {/* <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text> */}
                    <Image source={item.arrow} />
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    serv_list: {
        marginVertical: 10,
        marginHorizontal: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

});

export default ServicesList;

