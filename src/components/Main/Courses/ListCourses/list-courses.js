import React from 'react';
import { StyleSheet, View } from 'react-native';
import Data from '../../../global/Data/index';
import ListItems from '../../../global/ListItems/index';

export default (props) => {
    const courses = Data.courses;
    return (
        <View style={styles.container}>
            <ListItems section='courses' items={courses} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});