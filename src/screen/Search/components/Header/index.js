import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Header = ({ headerName, buttonName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerName}>{headerName}</Text>
      <TouchableWithoutFeedback>
        <Text style={styles.button}>{buttonName}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    fontStyle: "italic",
  },
});
