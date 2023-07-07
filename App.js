import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img1}
        source={require("./assets/imgs/central_perk_logo.jpeg")} />
      <Text>Try some of our most popular flavors!</Text>
      <View style={{height: 700, width: 1500, borderRadius: 30, overflow: 'hidden', flexDirection: 'row'}}>
        <Image
          style={{height: 700, width: 1500, position: 'absolute'}}
          source={require("./assets/imgs/coffee1.jpeg")} />
        <View style={{position: 'absolute', backgroundColor: 'green', alignSelf: 'flex-end', width: '100%'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Mocha</Text>
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
