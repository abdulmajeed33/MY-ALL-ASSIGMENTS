/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */



import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProgressBar = () => {
    const fill = (38 / 150) * 100;
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedCircularProgress
                size={206}
                width={10}
                fill={fill}
                tintColor="#FFBA24"
                backgroundColor="#FFFFFF"
                arcSweepAngle={180}
                rotation={270}
                children={'38 of 150'}
                style={{ top: 5 }}
            >
                {fill => <><Text style={{
                    textAlign: 'center',
                    color: '#7591af',
                    fontSize: 12,
                    fontWeight: '100',
                }}>
                    {Math.round((150 * fill) / 100)} of 150</Text>
                    <Text> Requests Completed</Text>
                </>
                }

            </AnimatedCircularProgress>

        </View>);
};

export default ProgressBar;