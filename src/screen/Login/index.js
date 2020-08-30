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
import screenKeys from "../../screen/screenKeys";
import FormTextInput from "../../components/FormTextInput";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { ScreenStack } from "react-native-screens";

const H = Dimensions.get("screen").height;

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("truongdaitin98@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState(null);
  const authContext = useContext(AuthenticationContext);

  const handleEmailChange = (email) => {
    setEmail(email);
    setError(null);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    setError(null);
  };

  const handleLoginPress = async () => {
    const isLoginSucceeded = await authContext.login(email, password);
    if (isLoginSucceeded) navigation.replace(screenKeys.Loading);
    else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  const handleRegisterPress = async () => {
    navigation.navigate(screenKeys.Register);
  };

  const handleForgotPassPress = async () => {
    navigation.navigate(screenKeys.ForgotPass);
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
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.registerBtn}>
            {">"} Register Free {"<"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassPress}>
          <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
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
  loginBtn: {
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

export default Login;
