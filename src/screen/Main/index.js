import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import screenKeys from "../../screen/screenKeys";
import HomeScreen from "../../screen/Home";
import BrowseScreen from "../../screen/Browse";
import CourseDetailScreen from "../../screen/CoursesDetail";
import ListCoursesScreen from "../../screen/ListCourses";
import ListPathScreen from "../../screen/ListPath";
import ProfileScreen from "../../screen/Profile";
import DownloadScreen from "../../screen/Download";
import HeaderNavigatorCustomize from "../../components/HeaderNavigatorCustomize";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "../../screen/Search";
import { CoursesProvider } from "../../provider/courses-provider";
import { CourseDetailProvider } from "../../provider/courses-detail-provider";
import { InstructorInfoProvider } from "../../provider/instructor-info-provider";
import { SearchCoursesProvider } from "../../provider/search-courses-provider";

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
        name={screenKeys.ListPath}
        component={ListPathScreen}
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
      <Stack.Screen
        name={screenKeys.ListCourses}
        component={ListCoursesScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name={screenKeys.ListPath}
        component={ListPathScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

const BrowseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenKeys.Browse}
        component={BrowseScreen}
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
        name={screenKeys.ListPath}
        component={ListPathScreen}
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

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === screenKeys.Home) {
      iconName = focused ? "md-home" : "md-home";
    } else if (route.name === "Search") {
      iconName = focused ? "ios-search" : "ios-search";
    } else if (route.name === "Download") {
      iconName = focused ? "ios-download" : "ios-download";
    } else if (route.name === "Browse") {
      iconName = focused ? "ios-apps" : "ios-apps";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const Main = () => {
  return (
    <CoursesProvider>
      <CourseDetailProvider>
        <InstructorInfoProvider>
          <SearchCoursesProvider>
            <Tab.Navigator
              screenOptions={screenOptions}
              unmountInactiveRoutes={true}
              tabBarOptions={{
                activeTintColor: "#ff6348",
                inactiveTintColor: "gray",
              }}
              listeners={{
                tabPress: (e) => {
                  // e.preventDefault(); // Use this to navigate somewhere else
                  console.log("Search tab bar button pressed");
                },
              }}
            >
              <Tab.Screen name={screenKeys.Home} component={HomeStack} />
              <Tab.Screen
                name={screenKeys.Download}
                component={DownloadStack}
              />
              <Tab.Screen name={screenKeys.Browse} component={BrowseStack} />
              <Tab.Screen name={screenKeys.Search} component={SearchStack} />
            </Tab.Navigator>
          </SearchCoursesProvider>
        </InstructorInfoProvider>
      </CourseDetailProvider>
    </CoursesProvider>
  );
};

export default Main;

const styles = StyleSheet.create({});
