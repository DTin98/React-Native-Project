import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import InfoCoursesItem from './InfoCouresesItem/info-courses-item'
import InfoPathItem from './InfoPathItem/info-path-item'
import InfoAuthorItem from './InfoAuthorItem/info-author-item'

const ICON_SIZE = 21

export default function SectionItem(props) {
    const renderInfo = (section, item) => {
        return section === 'courses' ? <InfoCoursesItem item={item} /> :
            section === 'path' ? <InfoPathItem item={item} /> : 
            <InfoAuthorItem item={item} />
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image style={props.section === 'authors' ? styles.authorImage : styles.image} source={require('../../../../../assets/course.png')} />
                {renderInfo(props.section, props.item)}
            </View>
            {props.section === 'courses' ?
                <TouchableOpacity style={styles.optionButton}>
                    <View><Icon name="ellipsis-v" color="black" size={ICON_SIZE} /></View>
                </TouchableOpacity> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    image: {
        height: 60,
        width: 80
    },
    authorImage:{
        marginLeft: 8,
        marginRight: 12,
        height: 60,
        width: 60,
        overflow: 'hidden',
        borderRadius: 50
    },
    optionButton: {
        alignSelf: 'center',
        marginRight: 10,
    }
});