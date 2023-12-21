import { FlatList, StyleSheet, Text, View } from "react-native";
import productsData from "../data/products_data"
import React from "react";
import ProductItem from "../components/ProductItem";

const ProductsByCategory = () => {

  const renderProductItem =({item})=>(
    <ProductItem product={item}/>
  )

  return (
    
      <FlatList
      data={productsData}
      renderItem={renderProductItem}
      keyExtractor={item => item.id}
      />
    
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});
