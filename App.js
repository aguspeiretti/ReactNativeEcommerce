import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Categories from "./src/screens/Categories";
import { useFonts } from "expo-font";
import ProductsByCategory from "./src/screens/ProductsByCategory";
import { useState } from "react";
import ProductsDetailScreen from "./src/screens/ProductsDetailScreen";
import Navigator from "./src/navigation/navigator";
export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productIdSelected, setProductIdSelected] = useState("");
  console.log(categorySelected);
  const [fontLoaded] = useFonts({
    "karla-regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator />;
  }

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  };

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId);
  };

  return (
    <>
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
