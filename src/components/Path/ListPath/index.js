import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PathItem from "./PathItem";

const ListPath = ({ items }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <PathItem item={item} style={styles.item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListPath;

const styles = StyleSheet.create({
  container: {},
  item: {
    marginVertical: 10,
  },
});
