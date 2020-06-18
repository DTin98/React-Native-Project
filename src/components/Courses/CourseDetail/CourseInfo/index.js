import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CourseAuthors from "./CourseAuthors";
import Rating from "../../SectionCourses/SectionCoursesItems/CoursesItem/CourseInfo/Rating";

const CourseInfo = ({ item, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{item.title}</Text>
      <CourseAuthors name={item.authorName} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#636e72", fontSize: 9 }}>
          {item.level} . {item.release} . {item.duration}
        </Text>
        <Rating star={item.star} vote={item.vote} style={{ marginLeft: 5 }} />
      </View>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    height: 90,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
