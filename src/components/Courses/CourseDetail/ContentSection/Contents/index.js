import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Data from "../../../../../global/Data";
import Header from "./Header";
import Body from "./Body";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { CourseDetailContext } from "../../../../../provider/courses-detail-provider";

const Contents = () => {
  const courseDetailContext = useContext(CourseDetailContext);
  const sections = courseDetailContext.state.section;
  const renderItem = (sections) => {
    return sections.map((section, index) => (
      <View style={styles.item}>
        <Header
          style={styles.header}
          index={index + 1}
          header={section.name}
          time={section.sumHours}
        />
        <Body items={section.lesson} />
      </View>
    ));
  };
  return <View style={styles.container}>{renderItem(sections)}</View>;
};

export default Contents;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 10,
  },
  header: {},
});
