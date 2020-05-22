import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function FilterBar(props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: 'orange'}]}>ALL</Text>
            <Text style={styles.text}>COURSES</Text>
            <Text style={styles.text}>PATH</Text>
            <Text style={styles.text}>AUTHORS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    text: {
        fontWeight: 'bold',
    }
});