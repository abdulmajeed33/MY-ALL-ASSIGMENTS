/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MashButton from '../Components/MashButton';
import { deviceWidth, deviceHeight } from '../Components/dimenstion';
import HelpfullTips from '../Components/HelpfullTips';
import Helpfull from '../const/Helpfull';
import ItemDivider from '../Components/itemDevider';
import ProgressBar from '../Components/ProgressBar';





function DataRemoval() {
    return (
        <SafeAreaView style={styles.body}>
            <View style={{ display: 'flex', flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Data Removal</Text>
                    <Image style={{
                        left: 112,
                    }}
                        source={require('../assets/PurePrivicy/menu.png')}
                    />
                </View>
                <View style={styles.button}>
                    <ProgressBar />
                    <MashButton title={'View Removal Requests'}
                        style={styles.buttonBody}
                        text={styles.buttonText} />
                </View>
            </View>
            <View style={{ display: 'flex', flex: 1 }}>
                <Text style={styles.heading}>Helpful tips</Text>
                <View style={styles.cartCard}>
                    <Text style={styles.cartHeading}>{Helpfull.Heading}</Text>
                    <FlatList
                        data={Helpfull.faq}
                        renderItem={({ item }) => <HelpfullTips item={item} />}
                        ItemSeparatorComponent={ItemDivider}
                    />
                </View>
            </View>
        </SafeAreaView >
    );
}

export default DataRemoval;



const styles = StyleSheet.create({
    body: {
        height: deviceHeight,
        backgroundColor: 'rgba(255, 255, 240, 1)',
        paddingBottom: 82,
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        width: deviceWidth,
        top: 20,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(37, 42, 49, 1)',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 70,
    },
    buttonBody: {
        top: 20,
        width: 264,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 1,
    },
    buttonText: {
        color: 'rgba(37, 42, 49, 1)',
        fontSize: 14,
    },
    cartCard: {
        height: 300,
        top: -10,
        elevation: 15,
        borderRadius: 24,
        backgroundColor: 'white',
        marginVertical: 5,
        marginHorizontal: 30,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: ' #848E9C',
    },
    heading: {
        top: -20,
        left: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F5E71',
    },
    cartHeading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgba(37, 42, 49, 1)',
        left: 5,
        top: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

})