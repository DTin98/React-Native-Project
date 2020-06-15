import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CourseInfo = ({ title, numberOfCourse, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{numberOfCourse} courses</Text>
      </View>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    color: "#636e72",
    fontSize: 9,
  },
});
