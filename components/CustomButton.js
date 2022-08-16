import {Pressable, StyleSheet, Text, View} from "react-native";
import {Palette} from "../theme/colors";

export const CustomButton = ({children, onPress}) => {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 0.4,
    aspectRatio: 2.5,
    backgroundColor: Palette.colors.primary5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Palette.colors.primary3
  },
  pressed: {
    opacity: 0.2
  }
})