import React from 'react';
import { StyleSheet, View } from 'react-native';
import Data from '../../../../../global/Data/index';
import ListItems from '../../../../../global/ListItems/index';

export default function SectionCourses(props) {
    const paths = Data.paths;
    return (
        <View style={styles.container}>
            <ListItems section='path' items={paths}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
});