import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import cart_data from "../data/cart_data";
import { colors } from "../global/color";

const Carrousel = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={true}
      autoplay={true}
      dotColor="transparent"
      activeDotColor="transparent"
    >
      {cart_data.map((producto) => (
        <View key={producto.id} style={styles.cardNovedadesContainer}>
          <View style={styles.cardNovedades}>
            <View style={styles.ladoIzquierdo}>
              <Image
                style={styles.cardImage}
                resizeMode="cover"
                source={{ uri: producto.thumbnail }}
              />
            </View>
            <View style={styles.ladoDerecho}>
              <Text style={styles.tituloCard}>{producto.title}</Text>
              <Text style={styles.descriptionCard}>{producto.description}</Text>
            </View>
          </View>
        </View>
      ))}
    </Swiper>
  );
};

export default Carrousel;

const styles = StyleSheet.create({
  wrapper: {},
  cardNovedadesContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardNovedades: {
    width: "90%",
    height: 200,
    borderLeftColor: colors.primaryLight,
    borderLeftWidth: 7,
    flexDirection: "row",
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
});
