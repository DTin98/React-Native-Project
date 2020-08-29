import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const W = Dimensions.get("window").width;

const Header = ({ index, header, time, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.thumbnail}>
        <Text style={{ color: "white" }}>{index}</Text>
      </View>
      <View>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.time}>
          {time < 1 ? parseInt(time * 60) + " Phút" : time + " Giờ"}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 0.87 * W,
  },
  thumbnail: {
    width: W / 5,
    height: W / 8,
    backgroundColor: "#636e72",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  time: {
    fontSize: 12,
  },
});
