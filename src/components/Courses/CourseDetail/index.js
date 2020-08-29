import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import CourseInfo from "./CourseInfo";
//import { ScrollView } from "react-native-gesture-handler";
import ContentSection from "./ContentSection";
import ToolButtons from "./ToolButtons";
import CourseVideo from "./CourseVideo";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { CourseDetailContext } from "../../../provider/courses-detail-provider";

const W = Dimensions.get("window").width;

const CourseDetail = ({ item }) => {
  const [scrollEnable, setScrollEnable] = useState(true);
  const authContext = useContext(AuthenticationContext);
  const courseDetailContext = useContext(CourseDetailContext);

  useEffect(() => {
    //Get lessons
    courseDetailContext.getCourseDetail(authContext.state.token, item.id);
  }, []);
  return (
    <View style={styles.container}>
      <CourseVideo
        style={styles.courseVideo}
        uri={courseDetailContext.state.promoVidUrl || item.promoVidUrl}
      ></CourseVideo>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        stickyHeaderIndices={[3]}
        scrollEnabled={scrollEnable}
        // onScroll={(SyntheticEvent) => {
        //   if (SyntheticEvent.nativeEvent.contentOffset.y >= 177)
        //     setScrollEnable(false);
        //   else setScrollEnable(true);
        // }}
      >
        <CourseInfo
          item={courseDetailContext.state.id ? courseDetailContext.state : item} //get info from provider or params
          style={styles.courseInfo}
        />
        <ToolButtons style={styles.toolButtons} />
        <View style={styles.description}>
          <Text>{courseDetailContext.state.description}</Text>
        </View>
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
  description: {
    padding: 25,
  },
  contentSection: {},
});
