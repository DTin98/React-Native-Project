import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import SectionItem from '../SectionItem/section-item'

export default function SectionCourses(props) {
    const courses = [
        {
            id: 1,
            title: 'Lập trình React Native nâng cao',
            author: 'Tin Truong',
            level: 'Advance',
            release: 'May 21, 2020',
            duration: '38 hours',
            star: 4.5,
            vote: 125
        },
        {
            id: 2,
            title: 'IOS',
            author: 'Tin Truong',
            level: 'Advance',
            release: 'May 21, 2020',
            duration: '37 hours',
            star: 4.5,
            vote: 125
        },
        {
            id: 3,
            title: 'Android',
            author: 'Tin Truong',
            level: 'Advance',
            release: 'May 21, 2020',
            duration: '39c hours',
            star: 4.5,
            vote: 125
        },
        {
            id: 4,
            title: 'Docker',
            author: 'Tin Truong',
            level: 'Advance',
            release: 'May 21, 2020',
            duration: '10 hours',
            star: 4.5,
            vote: 125
        },
    ];
    return (
        <View style={styles.container}>
            <SectionItem section='courses' item={courses[0]}/>
            <SectionItem section='courses' item={courses[1]}/>
            <SectionItem section='courses' item={courses[2]}/>
            <SectionItem section='courses' item={courses[3]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },

});