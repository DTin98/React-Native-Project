import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SectionCourses from "../../components/Courses/SectionCourses";
import { ScrollView } from "react-native-gesture-handler";
import { AuthenticationContext } from "../../provider/authentication-provider";
import {
  CoursesProvider,
  CoursesContext,
} from "../../provider/courses-provider";

const Home = () => {
  const authContext = useContext(AuthenticationContext);
  const coursesContext = useContext(CoursesContext);

  useEffect(() => {
    coursesContext.getMyCourses(authContext.state.token);
    coursesContext.getTopNew();
    coursesContext.getTopRate();
    coursesContext.getTopSell();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionCourses
          sectionName="Khóa học của tôi"
          sectionCode="MY_COURSES"
          items={coursesContext.state.my_courses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Khóa học mới"
          sectionCode="TOP_NEW_COURSES"
          items={coursesContext.state.top_new_courses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Khóa học nổi bật"
          sectionCode="TOP_RATE_COURSES"
          items={coursesContext.state.top_rate_courses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Khóa học gợi ý cho bạn"
          sectionCode="TOP_SELL_COURSES"
          items={coursesContext.state.top_sell_courses}
          style={styles.section}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  section: {
    margin: 5,
  },
});
