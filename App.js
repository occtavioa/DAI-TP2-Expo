import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require("./assets/imgs/central_perk_logo.jpeg")}
      />
      <Text style={styles.text}>Try some of our most popular flavors!</Text>
      <View style={styles.containerImgCafe}>
        <Image
          style={styles.imgCafe}
          source={require("./assets/imgs/coffee1.jpeg")}
        />
        <View style={styles.containerSubtitlo}>
          <Text style={[styles.text, { color: "white" }]}>Mocha</Text>
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
    height: "100%",
  },
  imgLogo: {
    aspectRatio: 1080 / 416,
    width: "40%",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
  containerImgCafe: {
    aspectRatio: 1 / 1,
    borderRadius: 50,
    overflow: "hidden",
    flexDirection: "row",
    width: "50%",
  },
  imgCafe: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  containerSubtitlo: {
    position: "absolute",
    backgroundColor: "green",
    alignSelf: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: "10%",
  },
});
