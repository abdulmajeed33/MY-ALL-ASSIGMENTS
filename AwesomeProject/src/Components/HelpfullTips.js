/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

const HelpfullTips = ({ item }) => {

    return (
        <SafeAreaView>
            <View
                style={{
                    marginLeft: 10,
                }}>
                <Text style={styles.header}>{item.Heading}</Text>
                <Text style={styles.descroption1}>
                    {item.Description1}
                </Text>
                <View style={styles.arrowImg}>
                    <Image source={item.arrow} />
                </View>
            </View>

        </SafeAreaView>
    );
};

export default HelpfullTips;


const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgba(37, 42, 49, 1)',
        lineHeight: 24,
    },
    descroption1: {
        width: 232,
        fontSize: 16,
        lineHeight: 25,
    },
    arrowImg: {
        marginRight: 20,
        alignItems: "flex-end",
        bottom: 20
    }
})