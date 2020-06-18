import React, { useState } from "react";
import { StyleSheet, View, Button, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../../screen/screenKeys";
import FormTextInput from "../../components/FormTextInput";

const H = Dimensions.get("screen").height;

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleLoginPress = () => {
    navigation.replace(screenKeys.Loading);
  };
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email"
        />
        <FormTextInput
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
        />
        <Button title="Login" onPress={handleLoginPress} />
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
});

export default Login;
