import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
const W = Math.round(Dimensions.get("window").width);

const PathItem = ({ item, style }) => {
  return (
    <TouchableWithoutFeedback style={[styles.container, style]}>
      <Image
        source={require("../../../../../assets/course.png")}
        style={styles.img}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.number_of_courses} courses</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PathItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  img: {
    height: W / 6,
    width: W / 4,
    marginRight: 10,
  },

  title: {
    fontWeight: "bold",
  },
});
