import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SectionItem from '../SectionItem/section-item'

export default function SectionCourses(props) {
    const paths = [
        {
            id: 1,
            title: 'React Native',
            number_of_courses: 12
        },
        {
            id: 2,
            title: 'IOS',
            number_of_courses: 24
        }
    ]
    return (
        <View style={styles.container}>
            <SectionItem section='path' item={paths[0]} />
            <SectionItem section='path' item={paths[1]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
});