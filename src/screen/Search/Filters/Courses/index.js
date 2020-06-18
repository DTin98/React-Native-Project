import React, { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import ListCourses from "../../../../components/Courses/ListCourses";
import Data from "../../../../global/Data";

const Courses = ({}) => {
  const [sortBy, setSortBy] = useState("newest");
  const [skillLevel, setSkillLevel] = useState(null);
  const courses = Data.courses;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Picker
          selectedValue={skillLevel}
          style={{
            height: 50,
            width: 130,
            transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
          }}
          onValueChange={(itemValue, itemIndex) => setSkillLevel(itemValue)}
        >
          <Picker.Item label="Beginner" value="beginner" />
          <Picker.Item label="Intermediate" value="intermediate" />
          <Picker.Item label="Advance" value="advance" />
        </Picker>
        <Picker
          mode="dropdown"
          selectedValue={sortBy}
          style={{
            height: 50,
            width: 140,
            transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
          }}
          onValueChange={(itemValue, itemIndex) => setSortBy(itemValue)}
        >
          <Picker.Item label="Newest" value="newest" />
          <Picker.Item label="Relevance" value="relevance" />
        </Picker>
      </View>
      <Text style={{ fontSize: 12 }}>{10} Results</Text>
      <ListCourses items={courses} />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
