import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import moment from "moment";

const W = Dimensions.get("window").width;

const renderItems = (items) => {
  return items.map((item) => (
    <TouchableWithoutFeedback>
      <View style={styles.item}>
        <View style={styles.titleIndex}>
          <Icon name="checkcircleo" style={{ marginRight: 5 }} />
          <Text style={{ fontSize: 12, width: W - 100 }}>{item.name}</Text>
        </View>
        <Text style={{ fontSize: 10 }}>
          {moment(item.hours, "HHmmss").format("HH:mm:ss")}
        </Text>
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
