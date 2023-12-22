import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Productos", { category });
        dispatch(setCategorySelected(category));
      }}
    >
      <Card style={styles.card}>
        <Text styles={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 15,
  },
});
