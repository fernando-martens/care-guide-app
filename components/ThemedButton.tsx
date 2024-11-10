import { PropsWithChildren } from "react";
import { Pressable, PressableProps, Text, StyleSheet } from "react-native";

export default function ThemedButton(props: {
    title: string,
    onPress: PressableProps["onPress"]
}){
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });