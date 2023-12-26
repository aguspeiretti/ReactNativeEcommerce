import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CategoryItem from "../components/CategoryItem.js";
import { useSelector } from "react-redux";
import {
  SimpleLineIcons,
  Entypo,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "../global/color.js";

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.shopSlice.categories);
  const [categoria, setCategoria] = useState("");

  const renderCategoryItem = ({ item }) => (
    <CategoryItem navigation={navigation} category={item} />
  );

  return (
    <View style={styles.contCat}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        style={styles.category}
      />

      {/* <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <SimpleLineIcons
            name="screen-desktop"
            size={30}
            color={colors.white}
          />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Tecnologia</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <Entypo name="classic-computer" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Electro</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <Ionicons name="md-home-outline" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Hogar</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <Ionicons name="shirt-outline" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Vestuario</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <AntDesign name="eyeo" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Belleza</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <MaterialCommunityIcons
            name="teddy-bear"
            size={30}
            color={colors.white}
          />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Juguetes</Text>
      </View>

      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <FontAwesome5 name="baby" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Bebes</Text>
      </View>

      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <Foundation name="trees" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Jardin</Text>
      </View>

      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <MaterialIcons name="sports-soccer" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Deportes</Text>
      </View>

      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <MaterialIcons name="pets" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Mascotas</Text>
      </View>

      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <Ionicons name="construct" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Construccion</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.categoryContainer}>
          <Ionicons name="ios-car-sport-sharp" size={30} color={colors.white} />
        </View>
        <Text style={{ fontSize: 20, color: colors.white }}>Automovil</Text>
      </View> */}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  contCat: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    height: "100%",
  },
  border: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
    marginVertical: 8,
  },
});
