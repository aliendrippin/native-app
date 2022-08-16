import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";

import {Palette} from "../theme/colors";
import {Cell} from "../components/Cell";
import {CustomButton} from "../components/CustomButton";

import {calculateWinner} from "../utils/calculateWinner";
import {updateStatus} from "../utils/updateStatus";

export const TicTacToe = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsCurrentPlayer, setXisCurrentPlayer] = useState(true);

  const winner = calculateWinner(cells);
  const isGameOver = winner || (!winner && cells.every(item => item));
  const statusText = updateStatus(winner, cells, xIsCurrentPlayer);

  const handleClickOnCell = (clickedCellIndex) => {
    const currentSymbolDetection = () => {
      return xIsCurrentPlayer ? 'X' : 'O'
    }
    if (cells[clickedCellIndex] || winner) {
      return;
    }
    setCells(currentCells =>
      currentCells.map((cell, index) =>
        index === clickedCellIndex ? currentSymbolDetection() : cell)
    );
    setXisCurrentPlayer((prevState) => !prevState);
  }

  const handleRestart = () => {
    setCells(prevCells => prevCells.map(item => null));
    setXisCurrentPlayer(prevPlayer => prevPlayer === false ? true : prevPlayer)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        {statusText}
      </Text>
      <View style={styles.cellsContainer}>
        {cells.map((cell, index) => (
          <Cell
            key={index}
            index={index}
            cells={cells}
            isGameOver={isGameOver}
            handlePress={handleClickOnCell}
          />
        ))}
      </View>
      {isGameOver &&
      <CustomButton onPress={handleRestart}>
        Новая игра
      </CustomButton>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.colors.primary2,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    color: Palette.colors.primary4,
  },
  cellsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "space-around",
    margin: 20,
    width: '90%',
    aspectRatio: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});