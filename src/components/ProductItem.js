import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setProductIdSelected } from "../features/shopSlice";
import { colors } from "../global/color";
import CardItems from "./CardItems";

const ProductItem = ({ product, navigation }) => {
  const dispach = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispach(setProductIdSelected(product.id)),
          navigation.navigate("Detalle", product.id);
      }}
      style={styles.containerProductItem}
    >
      <CardItems product={product} />
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  cardNovedades: {
    width: "90%",
    height: 200,
    borderLeftColor: colors.primaryLight,
    borderLeftWidth: 7,
    flexDirection: "row",
    marginTop: 20,
  },
  ladoDerecho: {
    width: "60%",
    height: "100%",
    padding: 5,
  },
  ladoIzquierdo: {
    width: "40%",
    height: "100%",
    padding: 5,
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  tituloCard: {
    fontFamily: "karla-regular",
    fontSize: 20,
    fontWeight: "600",
  },
  descriptionCard: {
    marginTop: 20,
  },
  priceCard: {
    fontSize: 30,
    padding: 10,
    color: colors.secondayLight,
  },
});
