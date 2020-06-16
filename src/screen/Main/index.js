import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import screenKeys from "../../screen/screenKeys";
import HomeScreen from "../../screen/Home";
import CourseDetailScreen from "../../screen/CoursesDetail";
import ListCoursesScreen from "../../screen/ListCourses";
import ProfileScreen from "../../screen/Profile";
import DownloadScreen from "../../screen/Download";
import HeaderNavigatorCustomize from "../../components/HeaderNavigatorCustomize";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "../../screen/Search";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenKeys.Home}
        component={HomeScreen}
        options={{
          headerTitle: (props) => <HeaderNavigatorCustomize {...props} />,
        }}
      />
      <Stack.Screen
        name={screenKeys.CourseDetail}
        component={CourseDetailScreen}
        options={{ headerShown: false, title: "Course detail" }}
      />
      <Stack.Screen
        name={screenKeys.ListCourses}
        component={ListCoursesScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name={screenKeys.Profile}
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const DownloadStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenKeys.Download}
        component={DownloadScreen}
        options={{
          headerTitle: (props) => <HeaderNavigatorCustomize {...props} />,
        }}
      />
      <Stack.Screen
        name={screenKeys.CourseDetail}
        component={CourseDetailScreen}
        options={{ headerShown: false, title: "Course detail" }}
      />
      <Stack.Screen
        name={screenKeys.Profile}
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenKeys.Search} component={SearchScreen} />
      <Stack.Screen
        name={screenKeys.CourseDetail}
        component={CourseDetailScreen}
        options={{ headerShown: false, title: "Course detail" }}
      />
    </Stack.Navigator>
  );
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === screenKeys.Home) {
      iconName = focused ? "md-home" : "md-home";
    } else if (route.name === "Search") {
      iconName = focused ? "ios-search" : "ios-search";
    } else if (route.name === "Download") {
      iconName = focused ? "ios-download" : "ios-download";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      unmountInactiveRoutes={true}
      tabBarOptions={{
        activeTintColor: "#ff6348",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name={screenKeys.Home} component={HomeStack} />
      <Tab.Screen name={screenKeys.Download} component={DownloadStack} />
      <Tab.Screen name={screenKeys.Search} component={SearchStack} />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
