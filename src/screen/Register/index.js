import React, { useState, useContext } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import screenKeys from "../../screen/screenKeys";
import FormTextInput from "../../components/FormTextInput";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { set } from "react-native-reanimated";

const H = Dimensions.get("screen").height;

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [rePassword, setRePassword] = useState("");
  const [isValidRePassword, setIsValidRePassword] = useState(true);
  const [error, setError] = useState(null);
  const authContext = useContext(AuthenticationContext);

  const handleUsernameChange = (username) => {
    setIsValidUsername(true);
    setError(null);
    setUsername(username);
  };
  const handleEmailChange = (email) => {
    setIsValidEmail(true);
    setError(null);
    setEmail(email);
  };
  const handlePhoneChange = (phone) => {
    setIsValidPhone(true);
    setError(null);
    setPhone(phone);
  };

  const handlePasswordChange = (rePassword) => {
    setIsValidPassword(true);
    setError(null);
    setPassword(rePassword);
  };

  const handleRePasswordChange = (_password) => {
    setIsValidRePassword(true);
    setError(null);
    setRePassword(_password);
  };

  const isValidated = () => {
    let isValidated = true;

    if (username === "") {
      setIsValidUsername(false);
      isValidated = false;
    }
    if (email === "") {
      setIsValidEmail(false);
      isValidated = false;
    }
    if (phone === "") {
      setIsValidPhone(false);
      isValidated = false;
    }
    if (password === "") {
      setIsValidPassword(false);
      isValidated = false;
    }
    if (rePassword === "") {
      setIsValidRePassword(false);
      isValidated = false;
    }
    if (!isValidated) setError("Chưa điền đủ thông tin");
    if (password !== rePassword) {
      setIsValidPassword(false);
      setIsValidRePassword(false);
      isValidated = false;
      setError("Mật khẩu không khớp nhau");
    }
    return isValidated;
  };

  const handleRegisterPress = async () => {
    //check validate
    if (isValidated())
      await axios
        .post("https://api.itedu.me/user/register", {
          username: username,
          email: email,
          phone: phone,
          password: password,
        })
        .then((response) => {
          console.log("handleRegisterPress -> response", response);
          if (response.status === 200) {
            // do something
          }
        })
        .catch((error) => {
          setError(error.response.data.message);
        });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormTextInput
          value={username}
          onChangeText={handleUsernameChange}
          placeholder="Username"
          isValid={isValidUsername ? true : false}
        />
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          isValid={isValidEmail ? true : false}
          placeholder="Email"
        />
        <FormTextInput
          value={phone}
          onChangeText={handlePhoneChange}
          isValid={isValidPhone ? true : false}
          placeholder="Phone"
        />
        <FormTextInput
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
          isValid={isValidPassword ? true : false}
          placeholder="Password"
        />
        <FormTextInput
          secureTextEntry={true}
          value={rePassword}
          onChangeText={handleRePasswordChange}
          isValid={isValidRePassword ? true : false}
          placeholder="Repeat Password"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Register Now" onPress={handleRegisterPress} />
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
    textAlign: "center",
  },
});

export default Register;
