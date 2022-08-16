import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"

import {Weather} from "./screens/Weather";
import {TicTacToe} from "./screens/TicTacToe";

import {Palette} from "./theme/colors";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Palette.colors.primary5},
            headerTintColor: "#84a98c",
            tabBarStyle: {backgroundColor: "#354f52"},
            tabBarActiveTintColor: "#84a98c",
            tabBarActiveBackgroundColor: "#2f3e46"
          }}>
          <BottomTab.Screen name="TicTacToe" component={TicTacToe} options={{
            title: "Крестики-нолики",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="game-controller" size={size} color={color}/>
            ),
          }
          }/>
          <BottomTab.Screen name="Weather" component={Weather} options={{
            title: "Погода",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="apps" size={size} color={color}/>
            ),
          }}/>
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
