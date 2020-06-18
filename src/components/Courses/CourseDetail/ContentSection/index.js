import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Contents from "./Contents";
import Transcript from "./Transcript";
import { ScrollView } from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

const ContentSection = (handleFocus, style) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen name="CONTENTS" component={Contents} />
        <Tab.Screen name="TRANSCRIPT" component={Transcript} />
      </Tab.Navigator>
    </View>
  );
};

export default ContentSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
