import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "../../../../../global/Data";
import Header from "./Header";
import Body from "./Body";
import { ScrollView } from "react-native-gesture-handler";

const Contents = () => {
  const contents = Data.contents;
  const renderItem = (contents) => {
    return contents.map((content, index) => (
      <View style={styles.item}>
        <Header
          style={styles.header}
          index={index + 1}
          header={content.header}
          time={content.time}
        />
        <Body items={content.body} />
      </View>
    ));
  };
  return (
    <View style={styles.container}>
      <ScrollView>{renderItem(contents)}</ScrollView>
    </View>
  );
};

export default Contents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 10,
  },
  header: {},
});
