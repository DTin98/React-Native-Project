import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Rating from "./Rating";

const CourseInfo = ({
  title,
  authorName,
  price,
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
        <Text style={[styles.text, { fontSize: 10 }]}>{authorName}</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {price ? price + " VND" : "FREE"}
          </Text>{" "}
          . {release} . {duration} tiếng
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
    fontSize: 11,
  },
});
