import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import screenKeys from "../../screen/screenKeys";
import Data from "../../global/Data";
import { useNavigation } from "@react-navigation/native";

const HeaderNavigatorCustomize = ({ children }) => {
  const { user } = Data;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(screenKeys.Profile, { user: user })}
      >
        <Icon name="account-circle" style={{ fontSize: 30 }} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNavigatorCustomize;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
