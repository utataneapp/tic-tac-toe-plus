import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  value: "X" | "〇" | number;
  onPress: () => void;
};
export const Square = (props: Props) => {
  const { value, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
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
