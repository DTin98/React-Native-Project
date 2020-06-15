import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import CourseInfo from "./CourseInfo";
import { ScrollView } from "react-native-gesture-handler";
import ContentSection from "./ContentSection";
import ToolButtons from "./ToolButtons";
import CourseVideo from "./CourseVideo";
import { useNavigation } from "@react-navigation/native";
const W = Dimensions.get("window").width;

const CourseDetail = ({ item }) => {
  return (
    <View>
      <CourseVideo style={styles.courseVideo}></CourseVideo>
      <ScrollView>
        <CourseInfo item={item} style={styles.courseInfo} />
        <ToolButtons style={styles.toolButtons} />
        <ContentSection />
      </ScrollView>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  courseVideo: {
    width: "100%",
    height: 200,
  },
  courseInfo: {
    marginBottom: 20,
  },
  toolButtons: {
    marginBottom: 20,
  },
});
