/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';


const ServicesList = ({ item }) => {
    return (
        <View style={style.serv_list}>
            <Image source={item.image} style={{ height: 55, width: 55 }} />
            <View
                style={style.body}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                <Text style={{ fontSize: 13, color: 'grey' }}>
                    {item.text}
                </Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.ingredients}</Text>
            </View>
            <View>
                <Image source={item.arrow} />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    serv_list: {
        marginHorizontal: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        height: 100,
        marginLeft: 10,
        paddingTop: 16,
        flex: 1,
    }
});

export default ServicesList;

