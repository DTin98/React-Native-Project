import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

const W = Dimensions.get("window").width;

const CourseAuthors = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("../../../../../../assets/donal-trump.jpg")}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default CourseAuthors;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bdc3c7",
    borderRadius: 20,
    width: W * 0.3,
  },
  avatar: {
    width: 30,
    height: 30,
    overflow: "hidden",
    borderRadius: 20,
  },
  name: {
    fontSize: 12,
  },
});
