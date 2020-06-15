import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import PathItem from "./PathItem";

const SectionPathItems = ({ items, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {items.map((item, index) => (
          <PathItem item={item} style={styles.PathItem} />
        ))}
      </ScrollView>
    </View>
  );
};
export default SectionPathItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PathItem: {
    margin: 5,
  },
});
