import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setProductIdSelected } from "../features/shopSlice";

const ProductItem = ({ product, navigation }) => {

  const dispach = useDispatch()

  const productId = product.id;
  console.log(productId);
  return (
    <TouchableOpacity
      onPress={() =>{dispach(setProductIdSelected(productId)) ,navigation.navigate("Detalle", { productId })}}
      style={styles.containerProductItem}
    >
      <Text style={styles.productTitle}>{product.title}</Text>
      <Image
        style={styles.productImage}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  containerProductItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
  },
  productTitle: {},
  productImage: {
    width: 60,
    height: 60,
  },
});
