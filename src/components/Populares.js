import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardItems from "./CardItems";
import products_data from "../data/products_data";

const renderItem = ({ item }) => <CardItems product={item} />;

const Populares = () => {
  return (
    <View style={styles.popularesContainer}>
      {products_data.map((product) => (
        <CardItems key={product.id} product={product} />
      ))}
    </View>
  );
};

export default Populares;

const styles = StyleSheet.create({
  popularesContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
