import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import All from "./Filters/All";
import Courses from "./Filters/Courses";
import Path from "./Filters/Path";

const Tab = createMaterialTopTabNavigator();

const updateStatusBar = () => {
  return (
    <View>
      <SearchBar />
    </View>
  );
};

export default ({ navigation }) => {
  navigation.setOptions({
    headerTitle: () => updateStatusBar(),
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen name="ALL" component={All} />
      <Tab.Screen name="COURSES" component={Courses} />
      <Tab.Screen name="PATH" component={Path} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
