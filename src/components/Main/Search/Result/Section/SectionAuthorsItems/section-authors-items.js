import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItems from '../../../../../global/ListItems/index';
import Data from '../../../../../global/Data/index';

export default (props) => {
    const authors = Data.authors;
    return (
        <View style={styles.container}>
            <ListItems section='authors' items={authors} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
});