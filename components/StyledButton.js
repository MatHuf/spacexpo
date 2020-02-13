import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { buttonStyles as styles } from "../styles";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
