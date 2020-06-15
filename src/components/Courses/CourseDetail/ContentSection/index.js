import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Contents from "./Contents";
import Transcript from "./Transcript";

const Tab = createMaterialTopTabNavigator();

const ContentSection = () => {
  return (
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
  );
};

export default ContentSection;

const styles = StyleSheet.create({});
