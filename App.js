import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import Search from './src/components/Main/Search/search';

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
