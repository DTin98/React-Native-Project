import React from 'react';
import { ScrollView, View } from 'react-native';
import Section from '../Section/section';
import styles from '../utils/styles/index';

export default () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Section sectionName='path' />
            </ScrollView>
        </View>
    );
}