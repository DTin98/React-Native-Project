import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "../../global/Data";
import SectionCourses from "../../components/Courses/SectionCourses";
import SectionPath from "../../components/Path/SectionPath";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionCourses
          sectionName="Software development"
          items={Data.courses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="IT operations"
          items={Data.courses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Data Professional"
          items={Data.courses}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Security Professional"
          items={Data.courses}
          style={styles.section}
        />
        <SectionPath
          sectionName="My paths"
          items={Data.paths}
          style={styles.section}
        />
        <SectionCourses
          sectionName="Bookmarks"
          items={Data.courses}
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
