import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import CoursesItem from "./CoursesItem";

const renderItems = (items) => {
  return items
    ? items.map((item, index) => (
        <CoursesItem item={item} style={styles.CoursesItem} key={item.id} />
      ))
    : null;
};

const SectionCoursesItems = ({ items, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {renderItems(items)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CoursesItem: {
    margin: 5,
  },
});

export default SectionCoursesItems;
