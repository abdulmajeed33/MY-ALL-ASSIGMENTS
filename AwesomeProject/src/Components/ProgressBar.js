/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';

const ProgressBar = () => {
    const fill = (38 / 150) * 100;
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedCircularProgress
                size={206}
                width={10}
                fill={fill}
                tintColor="#FFBA24"
                backgroundColor="rgba(255, 255, 255, 1)"
                arcSweepAngle={180}
                rotation={270}
                children={'38 of 150'}
                style={{ top: 70 }}
                renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="6" fill="#0A61FF" />}
            >
                {fill =>
                    <>
                        <Text style={styles.Text1}>
                            {Math.round((150 * fill) / 100)} of 150</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}> Requests Completed</Text>
                    </>
                }
            </AnimatedCircularProgress>

        </View>);
};

export default ProgressBar;



const styles = StyleSheet.create({
    Text1: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
})