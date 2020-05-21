import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionItems from '../SectionCoursesItem/section-items';


export default function SectionCourses(props) {
    const courses = [
        {
            id: 1,
            title: 'React Native',
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
            <View style={styles.header}>
                <Text style={styles.sectionName}>{props.sectionName}</Text>
                <Text style={styles.seeAllButton}>See all ></Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.sectionCourses}>
                {courses.map(item => <SectionItems item={item} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10
    },
    sectionCourses: {
        height: 155,
    },
    sectionName: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    seeAllButton:{
        marginRight: 8,
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: "italic",
        color: 'lightslategrey',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    }
});