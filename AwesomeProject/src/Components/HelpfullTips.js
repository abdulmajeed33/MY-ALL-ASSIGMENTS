/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import { deviceWidth, deviceHeight } from '../Components/dimenstion';
const HelpfullTips = ({ item }) => {
    console.log('helfulltips', item)
    return (
        <>

            <View
                style={{
                    marginLeft: 10,
                }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: 'rgba(37, 42, 49, 1)',
                    lineHeight: 24,
                }}>{item.Heading}</Text>
                <Text style={{
                    width: 232,
                    fontSize: 16,
                    lineHeight: 25,
                }}>
                    {item.Description1}
                </Text>
                <View style={{ marginRight: 20, alignItems: "flex-end", bottom: 20 }}>
                    <Image source={item.arrow} />
                </View>
            </View>

        </>
    );
};

export default HelpfullTips;


const style = StyleSheet.create({
    cartCard: {
        height: 300,
        top: -5,
        elevation: 15,
        borderRadius: 24,
        backgroundColor: 'white',
        marginVertical: 5,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: ' #848E9C',
        flexDirection: 'row'
    },

})