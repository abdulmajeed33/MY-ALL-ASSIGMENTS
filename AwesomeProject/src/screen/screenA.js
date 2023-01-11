/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, StyleSheet } from 'react-native';
import MashButton from '../Components/CustomButton';
import { deviceWidth, deviceHeight } from '../Components/dimenstion';
import { FlatList } from 'react-native';
import { Sevices } from '../const/Services';
import ServicesList from '../Components/Services_list';


function ScreenA() {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFF0', height: deviceHeight }}>
            <View>
                <Image
                    style={{ width: deviceWidth, height: 294, backgroundColor: '#C4C4C4' }}
                    source={require('../../assets/PurePrivicy/Pattern.png')}
                />
                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    width: deviceWidth,
                    top: 20,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Pure</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>privicy</Text>
                    <Image style={{
                        left: 112,
                    }}
                        source={require('../../assets/PurePrivicy/menu.png')}
                    />
                </View>
                <View style={{
                    width: 300,
                    flex: 1,
                    position: 'absolute',
                    top: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                }}>
                    <Image source={require('../../assets/PurePrivicy/Icon.png')} />
                    <Text style={{
                        lineHeight: 35,
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>Introducing your new Data Removal tool</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        lineHeight: 20,
                    }}>
                        Data Brokers sell your data - like your address and phone number. We tell them to delete it for you.
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <MashButton title={'Skip for now'} color={'rgba(37, 42, 49, 0.05)'}
                            style={{
                                top: 20,
                                width: 139,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 40,
                                marginRight: 20,
                            }} />
                        <MashButton title={'Show me how'}
                            style={{
                                top: 20,
                                width: 139,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 40,
                                borderWidth: 1,
                            }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <Text style={{
                    top: 10,
                    left: 20,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#252A31',
                }}>My Services </Text>
                <FlatList
                    data={Sevices}
                    renderItem={({ item }) => <ServicesList item={item} />}
                />
            </View>
        </SafeAreaView >
    );
}

export default ScreenA;
const styles = StyleSheet.create({
    body: {

    },
});