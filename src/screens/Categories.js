import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem.js";
import { useSelector } from "react-redux";

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.shopSlice.categories);

  const renderCategoryItem = ({ item }) => (
    <CategoryItem navigation={navigation} category={item} />
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        style={styles.category}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    marginBottom: 120,
  },
});
