import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import InfoItem from "../../SectionCourses/SectionCoursesItems/CoursesItem/CourseInfo";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../../../../screen/screenKeys";
import moment from "moment";

const CourseItem = ({ item, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={[styles.container, style]}
      onPress={() => {
        navigation.navigate(screenKeys.CourseDetail, { item });
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.img} />
      <InfoItem
        title={item.title}
        authorName={item["instructor.user.name"]}
        price={item.price}
        release={moment(item.createdAt).format("DD/MM/YYYY")}
        duration={item.totalHours}
        star={item.contentPoint}
        vote={item.ratedNumber}
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
