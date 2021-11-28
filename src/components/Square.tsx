import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Square = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>×</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
