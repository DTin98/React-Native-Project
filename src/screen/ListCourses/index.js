import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCoursesComponent from "../../components/Courses/ListCourses";
import Data from "../../global/Data";
import { CoursesContext } from "../../provider/courses-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";

const ListCourses = ({ route }) => {
  const sectionCode = route.params.sectionCode || "";
  const coursesContext = useContext(CoursesContext);
  const authContext = useContext(AuthenticationContext);
  let items = null;

  useEffect(() => {
    if (sectionCode === "MY_COURSES")
      coursesContext.getMyCourses(authContext.state.token, 50);
    if (sectionCode === "TOP_NEW_COURSES") coursesContext.getTopNew(50);
    if (sectionCode === "TOP_RATE_COURSES") coursesContext.getTopRate(50);
    if (sectionCode === "TOP_SELL_COURSES") coursesContext.getTopSell(50);
  }, []);

  if (sectionCode === "MY_COURSES") items = coursesContext.state.my_courses;
  if (sectionCode === "TOP_NEW_COURSES")
    items = coursesContext.state.top_new_courses;
  if (sectionCode === "TOP_RATE_COURSES")
    items = coursesContext.state.top_rate_courses;
  if (sectionCode === "TOP_SELL_COURSES")
    items = coursesContext.state.top_sell_course;

  console.log("ListCourses -> items", items);
  return (
    <View style={styles.container}>
      <ListCoursesComponent items={items} />
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
