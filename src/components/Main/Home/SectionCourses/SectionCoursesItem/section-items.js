import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoCoursesItem from '../../../../global/InfoCouresesItem/info-courses-item'

export default function SectionItems(props) {
    const renderStar = (num_start) => {
        let stars = [];
        for (let i = 0; i < num_start; i++) {
            stars.push(<View style={styles.star}><Icon name="star" color="yellow" size={8} /></View>);
        }
        return stars.map(star => star);
    };
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../../../assets/course.png')} />
            <InfoCoursesItem item={props.item}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        width: 170,
        backgroundColor: 'lightgray',
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