import React from 'react';
import { View } from 'react-native';
import Data from '../../../global/Data/index';
import ListItems from '../../../global/ListItems/index';
import styles from '../../utils/styles/index';

export default (props) => {
    const courses = Data.courses;
    return (
        <View style={styles.container}>
            <ListItems section='courses' items={courses} />
        </View>
    );
}