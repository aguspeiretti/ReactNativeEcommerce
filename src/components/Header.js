import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/color";
import Search from "./search";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Search />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontFamily: "karla-regular",
    fontSize: 20,
  },
});
