import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img1}
        source={require("./assets/imgs/central_perk_logo.jpeg")}
      />
      <div>
        <Image
          style={{height: 700, width: 1500}}
          source={require("./assets/imgs/coffee1.jpeg")}
        />
        <Text
          style={{position: 'relative'}}
        >
          Open up App.js to start working on your app!
        </Text>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img1: {
    height: 416,
    width: 1080,
  }
});
