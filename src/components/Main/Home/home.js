import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SectionCourses sectionName="Continue learning" />
                <SectionCourses sectionName="Path" />
                <SectionCourses sectionName="Channel" />
                <SectionCourses sectionName="Bookmarks" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 30,
    },
});