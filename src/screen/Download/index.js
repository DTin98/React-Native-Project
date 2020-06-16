import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCourses from "../../components/Courses/ListCourses";
import Header from "./Header";
import Data from "../../global/Data";

const Download = () => {
  const courses = Data.courses;
  const [items, setItems] = useState([...courses]);
  const [length, setLength] = useState(items.length);
  const [capacity, setCapacity] = useState(5.4);

  const handleRemoveAll = () => {
    setItems([]);
    setCapacity(0);
    setLength(0);
  };

  return (
    <View style={styles.container}>
      <Header
        style={{ backGroundColor: "red" }}
        length={length}
        capacity={capacity}
        onRemoveAll={handleRemoveAll}
      />
      <ListCourses items={items} />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
