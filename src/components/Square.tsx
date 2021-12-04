import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

type Props = {
  value: "✖" | "〇" | number;
  onPress: () => void;
};
export const Square = (props: Props) => {
  const { value, onPress } = props;
  return (
    <Button
      mode="contained"
      color="#5b5f10"
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{value}</Text>
    </Button>
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
