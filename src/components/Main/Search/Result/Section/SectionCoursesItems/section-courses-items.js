import React from 'react';
import { StyleSheet } from 'react-native';
import Data from '../../../../../global/Data/index';
import ListItems from '../../../../../global/ListItems/index';

export default () => {
    const courses = Data.courses;
    return (
        <ListItems section='courses' items={courses}/>
    );
}

const styles = StyleSheet.create({

});