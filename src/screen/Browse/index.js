import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "../../global/Data";
import SectionCourses from "../../components/Courses/SectionCourses";
import SectionPath from "../../components/Path/SectionPath";
import { ScrollView } from "react-native-gesture-handler";
import { AuthenticationContext } from "../../provider/authentication-provider";
import axios from "axios";

const Browse = () => {
  const AuthContext = useContext(AuthenticationContext);
  const [topNewCourses, setTopNewCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [topRateCourses, setTopRateCourses] = useState([]);
  const [topSellCourses, setTopSellCourses] = useState([]);

  useEffect(() => {
    //Get top new courses
    axios
      .post("https://api.itedu.me/course/top-new", {
        limit: 5,
        page: 1,
      })
      .then((response) => {
        if (response.status === 200) {
          // do something
          // console.log("Home -> response.data.payload", response.data.payload);
          setTopNewCourses(response.data.payload);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    //Get my courses
    axios
      .get("https://api.itedu.me/user/get-process-courses", {
        headers: {
          Authorization: "Bearer " + AuthContext.state.token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // do something
          // console.log("Home -> response.data.payload", response.data.payload);
          setMyCourses(response.data.payload);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    //Get top rate Courses
    axios
      .post("https://api.itedu.me/course/top-rate", {
        limit: 5,
        page: 1,
      })
      .then((response) => {
        if (response.status === 200) {
          // do something
          // console.log("Home -> response.data.payload", response.data.payload);
          setTopRateCourses(response.data.payload);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    //Get top sell courses
    axios
      .post("https://api.itedu.me/course/top-sell", {
        limit: 5,
        page: 1,
      })
      .then((response) => {
        if (response.status === 200) {
          // do something
          // console.log("Home -> response.data.payload", response.data.payload);
          setTopSellCourses(response.data.payload);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionCourses
          sectionName="Khóa học của tôi"
          items={myCourses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Khóa học mới"
          items={topNewCourses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Khóa học nổi bật"
          items={topRateCourses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Khóa học bán chạy nhất"
          items={topSellCourses}
          style={styles.section}
        />
      </ScrollView>
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  section: {
    margin: 5,
  },
});
