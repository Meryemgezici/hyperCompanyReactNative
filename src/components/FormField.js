import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { resetAllColors } from "../redux/slices/menuSlice";
import { useNavigation } from '@react-navigation/native';

const FormField = ({ store }) => {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleInputChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index] = text;
    setInputs(newInputs);
  };

  const handleReset = () => {
    setInputs(["", "", "", ""]);
    dispatch(resetAllColors());
  };

  const handleSubmit = () => {
    navigation.navigate('Detail');
  };

  const isFormValid = inputs.every((input) => input !== "");

  // reset button color
  let backgroundColorSubmit = "#7bc043";
  let backgroundColorReset = "#e74c3c";

  if (store.selectedIndex !== null && store.menu[store.selectedIndex]) {
    backgroundColorSubmit = store.menu[store.selectedIndex].color;
    backgroundColorReset = store.menu[store.selectedIndex].color;
  }

  if (store.resetColor) {
    backgroundColorSubmit = "#7bc043";
    backgroundColorReset = "#e74c3c";
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Form</Text>
      <View style={styles.inputContainer}>
        {inputs.map((value, index) => (
          <TextInput
            key={index.toString()}
            style={styles.input}
            value={value}
            onChangeText={(text) => handleInputChange(text, index)}
            placeholder={`Input ${index + 1}`}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.resetButton,
            { backgroundColor: backgroundColorReset },
          ]}
          disabled={inputs.every((input) => !input)}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isFormValid ? styles.submitButton : styles.submitButtonDisabled,
            { backgroundColor: backgroundColorSubmit },
          ]}
          disabled={!isFormValid}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor:"white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: "40%",
  },
  resetButton: {
    backgroundColor: "red",
  },
  submitButton: {
    backgroundColor: "green",
  },
  submitButtonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default FormField;
