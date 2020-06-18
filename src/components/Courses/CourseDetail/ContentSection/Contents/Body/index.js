import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const renderItems = (items) => {
  return items.map((item) => (
    <TouchableWithoutFeedback>
      <View style={styles.item}>
        <View style={styles.titleIndex}>
          <Icon name="checkcircleo" style={{ marginRight: 5 }} />
          <Text style={{ fontSize: 14 }}>{item.index}</Text>
        </View>
        <Text>{item.time}</Text>
      </View>
    </TouchableWithoutFeedback>
  ));
};

const Body = ({ items }) => {
  return <View>{renderItems(items)}</View>;
};

export default Body;

const styles = StyleSheet.create({
  container: {},
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  titleIndex: {
    flexDirection: "row",
    alignItems: "center",
  },
});
