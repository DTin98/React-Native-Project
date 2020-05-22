import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SectionCoursesItems from './SectionCoursesItems/section-courses-items'
import SectionPathItems from './SectionPathItems/section-path-items'
import SectionAuthorsItems from './SectionAuthorsItems/section-authors-items'


export default function Section(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionName}>{props.sectionName}</Text>
                <Text style={styles.result}>9 result ></Text>
            </View>
            {props.sectionName === 'Courses' ? <SectionCoursesItems /> : null}
            {props.sectionName === 'Path' ? <SectionPathItems /> : null}
            {props.sectionName === 'Authors' ? <SectionAuthorsItems /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingBottom: 5,
    },
    sectionName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    result:{
        marginTop: 5,
        fontSize: 12,
        color: 'lightslategrey',
    }
});