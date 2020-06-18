import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ onSubmitEditing, onFocus }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={true}
        placeholder="Search..."
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {},
  input: {
    borderColor: "lightgray",
    borderBottomWidth: 1,
    padding: 3,
    fontSize: 20,
  },
});
