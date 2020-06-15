import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCourses from "../../components/Courses/ListCourses";
import Header from "./Header";
import Data from "../../global/Data";

const Download = () => {
  const courses = Data.courses;
  return (
    <View style={styles.container}>
      <Header
        style={{ backGroundColor: "red" }}
        length={courses.length}
        capacity={5.4}
      />
      <ListCourses items={courses} />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
