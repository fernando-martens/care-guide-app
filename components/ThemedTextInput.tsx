import { FormikHandlers, FormikState } from "formik";
import { TextInput, StyleSheet } from "react-native";

export function ThemedTextInput(props: {
    handleChange: FormikHandlers["handleChange"],
    handleBlur: FormikHandlers["handleBlur"],
    values: any,
    name: string,
    placeholder: string
}) {
    return (
      <TextInput
        onChangeText={props.handleChange(props.name)}
        onBlur={props.handleBlur(props.name)}
        value={props.values[props.name]}
        placeholder={props.placeholder}
        style={styles.inputText}
        placeholderTextColor={"white"}
        keyboardType="email-address"
      />
    );
  }
  
  const styles = StyleSheet.create({
    inputText: {
      width: "100%",
      height: 50, // Definir a altura para o input
      backgroundColor: "grey",
      borderRadius: 8,
      padding: 10,
    }
  });