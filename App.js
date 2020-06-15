// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import React from "react";
// import { StyleSheet } from "react-native";
// import "react-native-gesture-handler";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import CourseDetail from "./src/components/Main/Courses/CourseDetail/course-detail";
// import ListCourses from "./src/components/Main/Courses/ListCourses/index.js";
// import Download from "./src/components/Main/Dowload/index";
// import Home from "./src/components/Main/Home/home";
// import Search from "./src/components/Main/Search/search";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Download" component={Download} />
//       <Stack.Screen name="ListCourses" component={ListCourses} />
//       <Stack.Screen name="CourseDetail" component={CourseDetail} />
//     </Stack.Navigator>
//   );
// };

// const SearchStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Search" component={Search} />
//       <Stack.Screen name="ListCourses" component={ListCourses} />
//       <Stack.Screen name="CourseDetail" component={CourseDetail} />
//     </Stack.Navigator>
//   );
// };

// const DownloadStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Download" component={Download} />
//     </Stack.Navigator>
//   );
// };

// export default function App() {
//   return (
{
  /* <NavigationContainer>
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "md-home" : "md-home";
        } else if (route.name === "Search") {
          iconName = focused ? "ios-search" : "ios-search";
        } else if (route.name === "Download") {
          iconName = focused ? "ios-download" : "ios-download";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#ff6348",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Download" component={DownloadStack} />
    <Tab.Screen name="Search" component={SearchStack} />
  </Tab.Navigator>
</NavigationContainer>; */
}
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
// });

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screen/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import screenKeys from "./src/screen/screenKeys";
import Search from "./src/screen/Search";
import Download from "./src/screen/Download";
import CourseDetail from "./src/screen/CoursesDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
``;

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenKeys.Home} component={Home} />
      <Stack.Screen
        name={screenKeys.CourseDetail}
        component={CourseDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const DownloadStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenKeys.Download} component={Download} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenKeys.Search} component={Search} />
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

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
