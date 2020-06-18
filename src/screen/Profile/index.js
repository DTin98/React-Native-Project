import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../screenKeys";

const TotalActiveDays = ({ style, total, streakDay }) => {
  return (
    <View style={style}>
      <Text style={{ color: "gray" }}>TOTAL ACTIVE DAYS</Text>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{total + " "} </Text>
        <Text>{streakDay} day streak</Text>
      </View>
    </View>
  );
};

const MostActiveTimeOfDay = ({ style, mostActiveTime }) => {
  return (
    <View style={style}>
      <Text style={{ color: "gray" }}>MOST ACTIVE TIME OF DAY</Text>
      <View>
        <Text style={{ fontSize: 25 }}>{mostActiveTime}</Text>
      </View>
    </View>
  );
};

const MostViewedSubject = ({ style, mostViewedSubject }) => {
  return (
    <View style={style}>
      <Text style={{ color: "gray" }}>MOST VIEWED SUBJECT</Text>
      <Text style={{ fontSize: 25 }}>{mostViewedSubject}</Text>
    </View>
  );
};

const Profile = ({ route }) => {
  const navigation = useNavigation();
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerName}>
        <Icon name="account-circle" style={{ fontSize: 60 }} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <Text style={{ marginVertical: 20, fontSize: 22, fontStyle: "italic" }}>
        Activity insights (last 30 days)
      </Text>
      <TotalActiveDays
        style={styles.totalActiveDays}
        total={user.totalActive}
        streakDay={user.streakDay}
      />
      <MostActiveTimeOfDay
        style={styles.mostActiveOfDay}
        mostActiveTime={user.mostActiveOfDay}
      />
      <MostViewedSubject
        style={styles.mostViewedSubject}
        mostViewedSubject={user.mostViewedSubject}
      />
      <Button
        title="Sign out"
        onPress={() => navigation.replace(screenKeys.Login)}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerName: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 25,
  },
  totalActiveDays: {
    marginVertical: 20,
  },
  mostActiveOfDay: {
    marginVertical: 20,
  },
  mostViewedSubject: {
    marginBottom: 40,
  },
});
