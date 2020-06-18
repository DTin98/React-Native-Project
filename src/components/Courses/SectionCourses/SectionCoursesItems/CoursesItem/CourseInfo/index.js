import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Rating from "./Rating";

const CourseInfo = ({
  title,
  authorName,
  level,
  release,
  duration,
  star,
  vote,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.text}>{authorName}</Text>
        <Text style={styles.text}>
          {level} . {release} . {duration}
        </Text>
        <Rating star={star} vote={vote} />
      </View>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    color: "#636e72",
    fontSize: 9,
  },
});
