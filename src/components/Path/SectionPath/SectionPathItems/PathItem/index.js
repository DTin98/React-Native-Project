import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PathInfo from "./PathInfo";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../../../../../screen/screenKeys";

const PathItem = ({ style, item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={[styles.container, style]}
      onPress={() => navigation.navigate("CourseDetail", { item: item })}
    >
      <Image source={{ uri: item.imgSrc }} style={styles.image} />
      <PathInfo
        style={styles.info}
        title={item.title}
        numberOfCourse={item.number_of_course}
      />
    </TouchableWithoutFeedback>
  );
};

export default PathItem;

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
