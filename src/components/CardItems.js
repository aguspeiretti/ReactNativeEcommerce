import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/color";

const CardItems = ({ product }) => {
  return (
    <View>
      <View style={styles.cardNovedades}>
        <View style={styles.ladoIzquierdo}>
          <Image
            style={styles.cardImage}
            resizeMode="contain"
            source={{ uri: product.thumbnail }}
          />
        </View>
        <View style={styles.ladoDerecho}>
          <Text style={styles.tituloCard}>{product.title}</Text>
          <Text style={styles.descriptionCard}>{product.description}</Text>
          <Text style={styles.priceCard}>${product.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardItems;

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
