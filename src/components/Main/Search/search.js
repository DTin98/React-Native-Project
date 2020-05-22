import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SearchBar from './SearchBar/search-bar'
import FilterBar from './FilterBar/filter-bar'
import Result from './Result/result'

export default function Search(props) {
    return (
        <View style={styles.container}>
            <SearchBar />
            <FilterBar />
            <Result />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        margin: 15,
    }
});