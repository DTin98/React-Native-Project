import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListPathComponent from "../../components/Path/ListPath";
import Data from "../../global/Data";

const ListPath = () => {
  return (
    <View style={styles.container}>
      <ListPathComponent items={Data.paths} />
    </View>
  );
};

export default ListPath;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
