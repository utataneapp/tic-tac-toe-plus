import { View, StyleSheet, Text } from "react-native";
import { Square } from "./Square";

export const Board = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.playerText}>Player X</Text>
      <View style={styles.rowContainer}>
        <Square />
        <Square />
        <Square />
      </View>
      <View style={styles.rowContainer}>
        <Square />
        <Square />
        <Square />
      </View>
      <View style={styles.rowContainer}>
        <Square />
        <Square />
        <Square />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    marginTop: 50,
  },

  playerText: {
    textAlign: "center",
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: "row",
  },
});
