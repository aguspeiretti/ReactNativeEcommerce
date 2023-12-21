import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.cardContainer, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: "#6c757d",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
