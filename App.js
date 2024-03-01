import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
