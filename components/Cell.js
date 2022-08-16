import {Image, Pressable, StyleSheet, View} from "react-native";
import {Palette} from "../theme/colors";

export const Cell = ({handlePress, isGameOver, cells, index}) => {
  return (
    <Pressable onPress={handlePress.bind(null, index)}>
      <View style={[styles.cell, isGameOver && styles.gameOver]}>
        {cells[index] === 'X' &&
          <Image
            style={styles.backdrop}
            source={require('../assets/cross.png')}
          />
        }
        {cells[index] === 'O' &&
          <Image
            style={styles.backdrop}
            source={require('../assets/circle.png')}
          />
        }
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cell: {
    flex: 0.3,
    aspectRatio: 1,
    backgroundColor: Palette.colors.primary1,
    alignItems: "center",
    justifyContent: "center"
  },
  gameOver: {
    opacity: 0.2
  },
  backdrop: {
    width: '100%',
    height: '100%'
  }
})