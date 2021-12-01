import { fireEvent } from "@testing-library/dom";
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
  const [preCnt, setPreCnt] = React.useState(0);
  const [secCnt, setSecCnt] = React.useState(3);

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next Player: " + (squares.turn ? "〇" : "X");

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
    if (
      calculateWinner(squares) ||
      squares.values[i] === 1 ||
      squares.values[i] === 2 ||
      squares.values[i] === 3
    ) {
      const newSquares = squares.values.slice();
      newSquares[i] = squares.turn ? "〇" : "X";
      setSquares({
        values: newSquares,
        turn: !squares.turn,
      });
    }
    if (squares.turn) {
      setPreCnt((state) => state + +squares.values[i]);
    } else {
      setSecCnt((state) => state + +squares.values[i]);
    }
  };

  const renderSquare = (i: number) => {
    return <Square value={squares.values[i]} onPress={() => handlePress(i)} />;
  };

  function calculateWinner(squares: Squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [one, two, three] = lines[i];
      if (
        squares.values[one] === squares.values[two] &&
        squares.values[one] === squares.values[three]
      ) {
        if (squares.values[one] === "〇" || squares.values[one] === "X") {
          return squares.values[one];
        }
        if (preCnt > secCnt) {
          return "〇";
        } else {
          return "X";
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
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
      <Text style={styles.status}>〇:{preCnt}</Text>
      <Text style={styles.status}>X:{secCnt}</Text>
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
