import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const Header = ({ length, capacity, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>
        {length} courses({capacity}GB)
      </Text>
      <TouchableNativeFeedback>
        <Text>REMOVE ALL</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
