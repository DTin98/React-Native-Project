import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

const FormTextInput = (props) => {
  const { style, isValid = true, ...otherProps } = props;
  return (
    <TextInput
      selectionColor="blue"
      style={[
        styles.textInput,
        style,
        { borderColor: isValid ? "silver" : "red" },
      ]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "silver",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
});

export default FormTextInput;
