import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Categories from "./src/screens/Categories";
import {useFonts} from "expo-font"
import ProductsByCategory from "./src/screens/ProductsByCategory";

export default function App() {


const [fontLoaded] = useFonts({
  "karla-regular": require("./assets/fonts/Karla-Regular.ttf")
})

if (!fontLoaded){
  return <ActivityIndicator/>
}

  return <ProductsByCategory/> ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
