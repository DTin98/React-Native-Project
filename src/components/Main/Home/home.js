import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';

export default (props) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SectionCourses {...props} sectionName="Continue learning" />
                <SectionCourses {...props} sectionName="Path" />
                <SectionCourses {...props} sectionName="Channel" />
                <SectionCourses {...props} sectionName="Bookmarks" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
});