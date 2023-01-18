/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View } from "react-native";
import { StyleSheet } from "react-native";
const ItemDivider = () => {
    return (
        <View
            style={styles.body}
        />
    );
};

export default ItemDivider;

const styles = StyleSheet.create({
    body: {
        top: 10,
        height: 1,
        width: '100%',
        backgroundColor: "grey",
    }
})