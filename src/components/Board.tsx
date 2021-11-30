import { prependListener } from "process";
import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Square } from "./Square";
import { Squares } from "./types/Types";

export const Board = () => {
  let initialSquares: Squares = {
    values: Array(9).fill(0),
    turn: true,
  };

  const [squares, setSquares] = React.useState(initialSquares);
  const [cnt, setCnt] = React.useState(0);

  const status = "Next Player: " + (squares.turn ? "A" : "B");

  useEffect(() => {
    let tentativeNum;
    const tentativeArray: number[] = [];
    let count: { [key: number]: number } = {};
    for (let i = 0; i < initialSquares.values.length; i++) {
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
    setSquares((pre) => ({ ...pre, values: tentativeArray }));
  }, []);

  const handlePress = (i: number) => {
    setCnt((pre) => pre + +squares.values[i]);
    const newSquares = squares.values.slice();
    newSquares[i] = squares.turn ? "〇" : "X";
    setSquares({
      values: newSquares,
      turn: !squares.turn,
    });
  };

  const renderSquare = (i: number) => {
    return <Square value={squares.values[i]} onPress={() => handlePress(i)} />;
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
