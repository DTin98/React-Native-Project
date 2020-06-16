import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCoursesComponent from "../../components/Courses/ListCourses";
import Data from "../../global/Data";

const ListCourses = () => {
  return (
    <View style={styles.container}>
      <ListCoursesComponent items={Data.courses} />
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
