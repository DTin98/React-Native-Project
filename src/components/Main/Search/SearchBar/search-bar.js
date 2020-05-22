import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

//const ICON_SIZE = 18;

export default function SearchBar(props) {
    return (
        <View style={styles.container}>
            <TextInput autoFocus={true} placeholder='Search...' style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        borderColor: 'lightgray',
        borderBottomWidth: 1,
        padding: 3,
        paddingLeft: 10,
        fontSize: 20
    },
});