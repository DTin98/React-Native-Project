import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoAuthorItem from './InfoAuthorItem/info-author-item';
import InfoCoursesItem from './InfoCouresesItem/info-courses-item';
import InfoPathItem from './InfoPathItem/info-path-item';

const ICON_SIZE = 21;

const renderInfo = (section, item) => {
    return section === 'courses' ? <InfoCoursesItem item={item} /> :
        section === 'path' ? <InfoPathItem item={item} /> :
            <InfoAuthorItem item={item} />
}

export default function SectionItem({ section, item }) {
    const navigation = useNavigation();
    
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={() => navigation.navigate('CourseDetail', {course: item})}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={section === 'authors' ? styles.authorImage : styles.image} source={require('../../../../../assets/course.png')} />
                {renderInfo(section, item)}
            </View>
            {section === 'courses' ?
                <TouchableOpacity style={styles.optionButton}>
                    <View><Icon name="ellipsis-v" color="black" size={ICON_SIZE} /></View>
                </TouchableOpacity> : null}
        </TouchableWithoutFeedback>
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
    authorImage: {
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