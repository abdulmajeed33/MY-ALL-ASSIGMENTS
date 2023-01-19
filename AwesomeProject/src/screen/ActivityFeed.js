/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
const ActivityFeed = () => {
    return (
        <SafeAreaView style={styles.body}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text} > ⚠️ Development in progress !!! </Text>
                <Text>🙂🙂🙂</Text>
            </View>
        </SafeAreaView>
    );
}

export default ActivityFeed;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 240, 1)',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});