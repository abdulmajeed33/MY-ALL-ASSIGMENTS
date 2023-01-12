/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const MashButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            // hitSlop={{ top: 50, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#FFF' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? 'rgba(37, 42, 49, 0.05)' : props.color },
                { ...props.style },
            ]}
        >
            <Text style={{ ...props.text }}>
                {props.title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    // text: {
    //     color: '#252A31',
    //     fontSize: 20,
    //     margin: 10,
    //     textAlign: 'center',
    // },
    // button: {
    //     width: 264,
    //     height: 48,
    //     alignItems: 'center',
    //     borderRadius: 40,
    // },
});

export default MashButton;