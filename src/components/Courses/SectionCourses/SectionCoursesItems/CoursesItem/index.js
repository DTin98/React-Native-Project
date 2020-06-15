import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CourseInfo from "./CourseInfo";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CoursesItem = ({ style, item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={[styles.container, style]}
      onPress={() => navigation.navigate("CourseDetail", { item: item })}
    >
      <Image
        source={require("../../../../../../assets/course.png")}
        style={styles.image}
      />
      <CourseInfo
        style={styles.info}
        title={item.title}
        authorName={item.authorName}
        level={item.level}
        release={item.release}
        duration={item.duration}
        star={item.star}
        vote={item.vote}
      />
    </TouchableWithoutFeedback>
  );
};

export default CoursesItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bdc3c7",
    width: 160,
    height: 160,
    overflow: "hidden",
    borderRadius: 15,
  },
  image: {
    height: "50%",
    width: "100%",
  },
  info: {
    height: "50%",
    width: "100%",
  },
});
