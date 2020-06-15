import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import SectionPathItems from "./SectionPathItems";

const SectionPath = ({ style, sectionName, navigation, items }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.sectionName}>{sectionName}</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("ListCourses")}
        >
          <Text style={styles.seeAllButton}>See all ></Text>
        </TouchableWithoutFeedback>
      </View>
      <SectionPathItems items={items} />
    </View>
  );
};

export default SectionPath;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  seeAllButton: {
    marginTop: 2,
    marginRight: 8,
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "lightslategrey",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
