import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import InfoCoursesItem from '../../../../global/ListItems/SectionItem/InfoCouresesItem/info-courses-item';

export default function SectionItems(props) {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={() => props.navigation.navigate('CourseDetail')}>
            <Image style={styles.image} source={require('../../../../../../assets/course.png')} />
            <InfoCoursesItem item={props.item} />
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginLeft: 12,
        width: 170,
        backgroundColor: '#dfe6e9',
        overflow: 'hidden',
        borderRadius: 8,
        justifyContent: 'space-between'
    },
    image: {
        height: '50%',
        width: '100%'
    },
    title: {
        marginLeft: 6,
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold'
    },
});