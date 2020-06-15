import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import InfoItem from "../../SectionCourses/SectionCoursesItems/CoursesItem/CourseInfo";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../../../../screen/screenKeys";

const CourseItem = ({ item, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={[styles.container, style]}
      onPress={() => {
        navigation.navigate(screenKeys.CourseDetail, { item });
      }}
    >
      <Image
        source={require("../../../../../assets/course.png")}
        style={styles.img}
      />
      <InfoItem
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

export default CourseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  img: {
    height: "100%",
    width: "30%",
  },
});
