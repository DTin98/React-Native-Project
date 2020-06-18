import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import All from "./Filters/All";
import Courses from "./Filters/Courses";
import Path from "./Filters/Path";
import { StackActions } from "react-navigation";
import screenKeys from "../screenKeys";

const Tab = createMaterialTopTabNavigator();

const updateStatusBar = (handleSubmit, handleFocus) => {
  return (
    <View>
      <SearchBar onSubmitEditing={handleSubmit} onFocus={handleFocus} />
    </View>
  );
};

export default ({ navigation }) => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };

  const handleFocus = () => {
    setSubmit(false);
  };

  navigation.setOptions({
    headerTitle: () => updateStatusBar(handleSubmit, handleFocus),
  });

  return submit ? (
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
  ) : null;
};

const styles = StyleSheet.create({
  container: {},
});
