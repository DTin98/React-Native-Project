import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Data from '../../global/Data/index';
import ListItems from '../../global/ListItems/index';
import styles from '../utils/styles/index';

export default () => {
    const downloadedCourses = Data.courses;
    return (
        <View style={styles.container}>
            <View style={mstyles.header}>
                <Text style={mstyles.text}>4 courses(4.6GB)</Text>
                <TouchableNativeFeedback >
                    <Text style={mstyles.removeButton}>REMOVE ALL</Text>
                </TouchableNativeFeedback>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListItems section='courses' items={downloadedCourses} />
            </ScrollView>
        </View>
    );
}

const mstyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10
    },  
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    removeButton:{
        color: '#227093',
        fontWeight: 'bold',
    }
})