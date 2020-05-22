import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionItems from '../SectionItem/section-item';

export default function SectionAuthors(props) {
    const authors = [
        {
            id: 1,
            fullname: 'Trương Đại Tín',
            number_of_courses: 12
        },
        {
            id: 2,
            fullname: 'Kai Sin',
            number_of_courses: 25
        }
    ];

    return (
        <View style={styles.container}>
            <SectionItems section='authors' item={authors[0]} />
            <SectionItems section='authors' item={authors[1]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
});