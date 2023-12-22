import { FlatList, StyleSheet, Text, View } from "react-native";
import productsData from "../data/products_data";
import React from "react";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Search from "../components/search";

const ProductsByCategory = ({ navigation, route }) => {
  const [productByCategory, setProductByCategory] = useState([]);
  const [search, setSearch] = useState("");

  const { category } = route.params;
  console.log(category);
  useEffect(() => {
    const productFilter = productsData.filter(
      (product) => product.category == category
    );
    const refiltred = productFilter.filter((product) =>
      product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setProductByCategory(refiltred);
  }, [category, search]);

  const renderProductItem = ({ item }) => (
    <ProductItem navigation={navigation} product={item} />
  );

  return (
    <>
      {/* <Header title={"productos"} /> */}
      <Search onSearch={setSearch} />
      <FlatList
        data={productByCategory}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});
