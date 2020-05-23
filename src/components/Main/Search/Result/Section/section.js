import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SectionAuthorsItems from './SectionAuthorsItems/section-authors-items';
import SectionCoursesItems from './SectionCoursesItems/section-courses-items';
import SectionPathItems from './SectionPathItems/section-path-items';


export default ({ sectionName }) => {
    const navigation = useNavigation();
    //console.log(sectionName);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionName}>
                    {sectionName[ 0 ].toUpperCase() + sectionName.slice(1)}
                </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("ListCourses")}>
                    <Text style={styles.result}>9 result ></Text>
                </TouchableWithoutFeedback>
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