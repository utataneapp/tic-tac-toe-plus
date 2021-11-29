import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Square } from "./Square";

export const Board = () => {
  const status = "Next Player X";
  let initialSquares: Array<"x" | "〇" | number> = Array(9).fill("");
  const [squares, setSquares] = React.useState(initialSquares);
  const [cnt, setCnt] = React.useState(0);

  useEffect(() => {
    let tentativeNum;
    const tentativeArray: number[] = [];
    let count: { [key: number]: number } = {};
    for (let i = 0; i < initialSquares.length; i++) {
      while (true) {
        tentativeNum = Math.floor(Math.random() * 3 + 1);
        if (count[tentativeNum] !== 3) {
          tentativeArray.push(tentativeNum);
          count[tentativeNum] = (count[tentativeNum] || 0) + 1;
          console.log(count);
          break;
        }
      }
    }
    setSquares(tentativeArray);
  }, []);

  const handlePress = (i: number) => {
    setCnt((pre) => pre + +squares[i]);
    const newSquares = squares.slice();
    newSquares[i] = "x";
    setSquares(newSquares);
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onPress={() => handlePress(i)} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.status}>{cnt}</Text>
      <View style={styles.rowContainer}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.rowContainer}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.rowContainer}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    marginTop: 50,
  },

  status: {
    textAlign: "center",
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: "row",
  },
});
