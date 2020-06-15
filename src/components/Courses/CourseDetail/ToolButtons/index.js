import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const ICON_SIZE = 30;
const ToolButtons = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableNativeFeedback style={styles.bookmark}>
        <Icon name="bookmark" size={ICON_SIZE} />
        <Text>Bookmark</Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback style={styles.bookmark}>
        <Icon name="broadcast" size={ICON_SIZE} />
        <Text>Add to Channel</Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback style={styles.bookmark}>
        <Icon name="cloud-download" size={ICON_SIZE} />
        <Text>Download</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ToolButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bookmark: {
    alignItems: "center",
  },
});
