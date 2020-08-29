import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CourseAuthors from "./CourseAuthors";
import moment from "moment";
import Rating from "../../SectionCourses/SectionCoursesItems/CoursesItem/CourseInfo/Rating";

const CourseInfo = ({ item, style }) => {
  // console.log("CourseInfo -> item", item);
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{item.title}</Text>
      <CourseAuthors
        name={item["instructor.user.name"] || item.instructorName}
        id={item.instructorId || null}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#636e72",
              fontSize: 9,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {item.price ? item.price + " VND" : "FREE"} .{" "}
            </Text>
            {moment(item.createdAt).format("DD/MM/YYYY")} . {item.totalHours}{" "}
            tiếng
          </Text>
        </View>
        <Rating
          star={item.contentPoint}
          vote={item.ratedNumber}
          style={{ marginLeft: 5 }}
        />
      </View>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    height: 90,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
