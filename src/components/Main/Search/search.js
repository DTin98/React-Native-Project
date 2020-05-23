import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Authors from './Result/Authors/index';
import Courses from './Result/Courses/index';
import Path from './Result/Path/index';
import Result from './Result/result';
import SearchBar from './SearchBar/search-bar';

const Tab = createMaterialTopTabNavigator();

const updateStatusBar = () => {
    return <View>
        <SearchBar />
    </View>
};

export default ({navigation}) => {
    navigation.setOptions({
        headerTitle: () => updateStatusBar()
    })
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: {
                fontWeight: 'bold'
            },
        }}>
            <Tab.Screen name='ALL' component={Result} />
            <Tab.Screen name='COURSES' component={Courses} />
            <Tab.Screen name='PATH' component={Path} />
            <Tab.Screen name='AUTHORS' component={Authors} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});