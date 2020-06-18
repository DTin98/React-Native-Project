import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import screenKeys from "./src/screen/screenKeys";

import MainScreen from "./src/screen/Main";
import Login from "./src/screen/Login";
import LoadingScreen from "./src/screen/Loading";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenKeys.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenKeys.Main}
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenKeys.Loading}
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
