import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../../screen/screenKeys";

const Loading = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    if (loading < 100) {
      setTimeout(() => {
        setLoading(loading + 10);
      }, 50);
    } else navigation.replace(screenKeys.Main);
  }, [loading]);
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" style={{ margin: 50 }} />
      <Text style={{ fontWeight: "bold" }}>{loading}%</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "column",
    padding: 10,
  },
});
