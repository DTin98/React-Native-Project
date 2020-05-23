import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Data from '../../global/Data/index';
import ListCourses from '../Courses/ListCourses/list-courses';

export default (props) => {
    const downloadedCourses = Data.courses;
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListCourses section='courses' items={downloadedCourses}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 12
    }
})