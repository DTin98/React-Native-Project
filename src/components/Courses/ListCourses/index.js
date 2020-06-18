import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Item from "./CourseItem";

const ListItems = ({ items }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <Item item={item} style={styles.item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {},
  item: {
    marginVertical: 10,
  },
});
