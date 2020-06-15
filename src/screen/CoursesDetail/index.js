import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CourseDetail from "../../components/Courses/CourseDetail";

const Index = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <CourseDetail item={item} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
