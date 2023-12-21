import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import products_data from "../data/products_data";
import Header from "../components/Header";

const ProductsDetailScreen = ({ productId }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const productFound = products_data.find(
      (product) => product.id == productId
    );
    setProduct(productFound);
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <Header title={"Detalle del producto"} />
          <View>
            <Image source={{ uri: product.thumbnail }} resizeMode="cover" />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.price}>{product.price}</Text>
              <TouchableOpacity>
                <Text style={styles.buyText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default ProductsDetailScreen;

const styles = StyleSheet.create({});
