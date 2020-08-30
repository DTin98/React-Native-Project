import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import All from "./Filters/All";
import Courses from "./Filters/Courses";
import Path from "./Filters/Path";
import { StackActions } from "react-navigation";
import screenKeys from "../screenKeys";
import { SearchCoursesContext } from "../../provider/search-courses-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";

const Tab = createMaterialTopTabNavigator();

const updateStatusBar = (handleSubmit, handleFocus, handleChangeText) => {
  return (
    <View>
      <SearchBar
        onSubmitEditing={handleSubmit}
        onFocus={handleFocus}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default ({ navigation }) => {
  const [submit, setSubmit] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const searchCoursesContext = useContext(SearchCoursesContext);
  const authContext = useContext(AuthenticationContext);

  const handleSubmit = () => {
    setSubmit(true);
  };

  const handleChangeText = (keyword) => {
    setKeyword(keyword);
  };

  const handleFocus = () => {
    setSubmit(false);
  };

  navigation.setOptions({
    headerTitle: () =>
      updateStatusBar(handleSubmit, handleFocus, handleChangeText),
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
