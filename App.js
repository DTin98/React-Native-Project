import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import screenKeys from "./src/screen/screenKeys";

import MainScreen from "./src/screen/Main";
import Login from "./src/screen/Login";
import LoadingScreen from "./src/screen/Loading";
import RegisterScreen from "./src/screen/Register";
import ForgotPassScreen from "./src/screen/ForgotPass";
import { AuthenticationProvider } from "./src/provider/authentication-provider";

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
      <Stack.Screen
        name={screenKeys.Register}
        component={RegisterScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={screenKeys.ForgotPass}
        component={ForgotPassScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </AuthenticationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
