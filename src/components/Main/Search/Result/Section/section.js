import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionAuthorsItems from './SectionAuthorsItems/section-authors-items';
import SectionCoursesItems from './SectionCoursesItems/section-courses-items';
import SectionPathItems from './SectionPathItems/section-path-items';


export default ({ sectionName }) => {
    //console.log(sectionName);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionName}>
                    {sectionName[ 0 ].toUpperCase() + sectionName.slice(1)}
                </Text>
                <Text style={styles.result}>9 result ></Text>
            </View>
            {sectionName === 'courses' ? <SectionCoursesItems /> : null}
            {sectionName === 'path' ? <SectionPathItems /> : null}
            {sectionName === 'authors' ? <SectionAuthorsItems /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    header: {
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
    result: {
        marginTop: 5,
        fontSize: 12,
        color: 'lightslategrey',
    }
});