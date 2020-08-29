import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import SectionCoursesItems from "./SectionCoursesItems";
import screenKeys from "../../../screen/screenKeys";
import { useNavigation } from "@react-navigation/native";

const Section = ({ style, sectionName, items }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.sectionName}>{sectionName}</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(screenKeys.ListCourses)}
        >
          <Text style={styles.seeAllButton}>See all ></Text>
        </TouchableWithoutFeedback>
      </View>
      <SectionCoursesItems
        items={items}
        sectionName={sectionName}
        key={sectionName}
      />
    </View>
  );
};

export default Section;

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
