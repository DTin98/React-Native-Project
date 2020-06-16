import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import CourseInfo from "./CourseInfo";
//import { ScrollView } from "react-native-gesture-handler";
import ContentSection from "./ContentSection";
import ToolButtons from "./ToolButtons";
import CourseVideo from "./CourseVideo";
import { useNavigation } from "@react-navigation/native";
const W = Dimensions.get("window").width;

const CourseDetail = ({ item }) => {
  const [scrollEnable, setScrollEnable] = useState(true);
  return (
    <View style={styles.container}>
      <CourseVideo style={styles.courseVideo}></CourseVideo>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        stickyHeaderIndices={[2]}
        scrollEnabled={scrollEnable}
        // onScroll={(SyntheticEvent) => {
        //   if (SyntheticEvent.nativeEvent.contentOffset.y >= 177)
        //     setScrollEnable(false);
        //   else setScrollEnable(true);
        // }}
      >
        <CourseInfo item={item} style={styles.courseInfo} />
        <ToolButtons style={styles.toolButtons} />
        <View></View>
        <ContentSection style={styles.contentSection} />
      </ScrollView>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
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
  contentSection: {},
});
