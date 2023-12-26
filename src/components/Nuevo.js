import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cart_data from "../data/cart_data";
import { colors } from "../global/color";
import Carrousel from "./Carrousel";

const Nuevo = () => {
  return (
    <View style={styles.carrouselContainer}>
      <Carrousel />
    </View>
  );
};

export default Nuevo;

const styles = StyleSheet.create({
  carrouselContainer: {
    width: "100%",
    height: 200,
    marginTop: 25,
  },
});
