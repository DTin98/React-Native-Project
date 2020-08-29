import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import { InstructorInfoContext } from "../../../../../provider/instructor-info-provider";
import { AuthenticationContext } from "../../../../../provider/authentication-provider";

const W = Dimensions.get("window").width;

const CourseAuthors = ({ name, id = null }) => {
  const instructorInfoContext = useContext(InstructorInfoContext);
  const authContext = useContext(AuthenticationContext);
  useEffect(() => {
    instructorInfoContext.getInstructorDetail(authContext.state.token, id);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={
          !id
            ? require("../../../../../../assets/donal-trump.jpg")
            : {
                uri: instructorInfoContext.state.avatar,
              }
        }
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default CourseAuthors;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bdc3c7",
    borderRadius: 20,
    width: W * 0.3,
  },
  avatar: {
    width: 30,
    height: 30,
    overflow: "hidden",
    borderRadius: 20,
  },
  name: {
    fontSize: 12,
  },
});
