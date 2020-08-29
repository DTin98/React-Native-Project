import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../screenKeys";
import FormTextInput from "../../components/FormTextInput";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { ScreenStack } from "react-native-screens";

const H = Dimensions.get("screen").height;

const ForgotPass = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handleSendEmailPress = async () => {};
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email"
        />
        <TouchableOpacity onPress={handleSendEmailPress}>
          <Text style={styles.sendBtn}>Send Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    width: "40%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    padding: 10,
  },
  sendBtn: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#3498db",
    padding: 15,
    textAlign: "center",
    marginTop: 10,
  },
  registerBtn: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#c0392b",
    padding: 15,
    textAlign: "center",
    marginTop: 10,
  },
  forgotPass: {
    color: "blue",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default ForgotPass;
