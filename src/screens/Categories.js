import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import categoriesData from "../data/categories_data.js";
import CategoryItem from "../components/CategoryItem.js";

console.log(categoriesData);
const Categories = () => {
  const renderCategoryItem = ({ item }) => <CategoryItem category={item} />;

  return (
    <View>
      <Header title={"Categorias"} />
      <FlatList
        data={categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
