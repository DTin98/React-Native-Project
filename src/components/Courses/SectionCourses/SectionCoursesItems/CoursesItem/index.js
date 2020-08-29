import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CourseInfo from "./CourseInfo";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const CoursesItem = ({ style, item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={[styles.container, style]}
      onPress={() => navigation.navigate("CourseDetail", { item: item })}
    >
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <CourseInfo
        style={styles.info}
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

export default CoursesItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bdc3c7",
    width: 200,
    height: 200,
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
