import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListPath from "../../../../components/Path/ListPath";
import Data from "../../../../global/Data";

const Path = () => {
  const paths = Data.paths;
  return (
    <View style={styles.container}>
      <ListPath items={paths} />
    </View>
  );
};

export default Path;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
