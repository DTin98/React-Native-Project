import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import Header from "../../components/Header";
import ListCourses from "../../../../components/Courses/ListCourses";
import Data from "../../../../global/Data";

const All = () => {
  const courses = Data.courses;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header headerName="Courses" buttonName="10 result >" />
          <ListCourses items={courses} />
        </View>
        <View>
          <Header headerName="Path" buttonName="1 result >" />
          <ListCourses items={courses} />
        </View>
        <View>
          <Header headerName="Authors" buttonName="8 result >" />
          <ListCourses items={courses} />
        </View>
      </ScrollView>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
