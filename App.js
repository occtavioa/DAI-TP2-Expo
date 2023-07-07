import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img1}
        source={require("./assets/imgs/central_perk_logo.jpeg")} />
      <View style={{height: 700, width: 1500, borderRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-end'}}>
        <Image
          style={{height: 700, width: 1500, position: 'absolute'}}
          source={require("./assets/imgs/coffee1.jpeg")} />
        <View style={{backgroundColor: 'green'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>
            Mocha
          </Text>
        </View>
      </View>
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
