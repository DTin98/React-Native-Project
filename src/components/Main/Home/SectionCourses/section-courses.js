import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Data from '../../../global/Data/index';
import SectionItems from './SectionCoursesItem/section-items';


export default function SectionCourses(props) {
    const courses = Data.courses;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionName}>{props.sectionName}</Text>
                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ListCourses')}>
                    <Text style={styles.seeAllButton}>See all ></Text>
                </TouchableWithoutFeedback>

            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.sectionCourses}>
                {courses.map(item => <SectionItems {...props} item={item} />)}
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
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    seeAllButton: {
        marginTop: 2,
        marginRight: 8,
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: "italic",
        color: 'lightslategrey',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
});