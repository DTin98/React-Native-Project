import React, { useState, useContext } from "react";
import axios from "axios";
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
import Icon from "react-native-vector-icons/MaterialIcons";

const H = Dimensions.get("screen").height;

const ForgotPass = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isSucceeded, SetSucceeded] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      setIsValidEmail(false);
      setError("Email không hợp lệ");
    } else {
      setIsValidEmail(true);
      setError(null);
    }
    setEmail(email);
  };

  const handleSendEmailPress = async () => {
    await axios
      .post("https://api.itedu.me/user/forget-pass/send-email", {
        email: email,
      })
      .then((response) => {
        if (response.status === 200) {
          // do something
          SetSucceeded(true);
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const renderForm = () => {
    return !isSucceeded ? (
      <View style={styles.form}>
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email"
          isValid={isValidEmail ? true : false}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity onPress={handleSendEmailPress}>
          <Text style={styles.sendBtn}>Send Email</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: "center", width: 300 }}>
        <Icon name="done" style={{ fontSize: 60, color: "green" }}></Icon>
        <Text>
          Vui lòng kiểm tra email của bạn để tiếp tục khôi phục mật khẩủ
        </Text>
      </View>
    );
  };

  return <View style={styles.container}>{renderForm()}</View>;
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
