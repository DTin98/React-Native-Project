import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerName, buttonName, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerName}>{headerName}</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          navigateTo ? navigation.navigate(navigateTo) : null;
        }}
      >
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
