import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../utils/styles/index";

const ICON_SIZE = 8;

const renderStar = (num_start) => {
  let stars = [];
  for (let i = 0; i < num_start; i++) {
    stars.push(
      <View style={styles.star}>
        <Icon name="star" color="orange" size={ICON_SIZE} />
      </View>
    );
  }
  return stars.map((star) => star);
};

export default ({ star, vote, style }) => {
  return (
    <View style={[styles.rating, style]}>
      {renderStar(star)}
      <Text style={(styles.text, { fontSize: 7 })}> ({vote})</Text>
    </View>
  );
};
