import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Section from './Section/section'


export default function Result(props) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Section sectionName='Courses' />
                <Section sectionName='Path' />
                <Section sectionName='Authors' />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'space-around'
    }
});