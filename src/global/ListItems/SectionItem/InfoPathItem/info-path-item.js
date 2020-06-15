import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const ICON_SIZE = 8;

export default function SectionItems(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.item.title}</Text>
            <View style={styles.info}>
                <Text style={styles.text}>{props.item.number_of_courses} courses</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    title: {
        marginLeft: 6,
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold'
    },
    info: {
        margin: 6,
    },
    text: {
        color: 'dimgray',
        fontSize: 10
    }
});