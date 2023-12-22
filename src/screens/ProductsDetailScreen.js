import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import products_data from "../data/products_data";
import Header from "../components/Header";
import { colors } from "../global/color";

const ProductsDetailScreen = ({ route }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = route.params;
  const [isPortrait, setIsPortrait] = useState(true);
  const { height, width } = useWindowDimensions();
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
          {/* <Header title={"Detalle del producto"} /> */}
          <View>
            <Image
              source={{ uri: product.thumbnail }}
              resizeMode="cover"
              style={
                isPortrait ? styles.imageProduct : styles.imageProductLandscape
              }
            />
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.price}>{product.price}</Text>
              <TouchableOpacity
                style={isPortrait ? styles.buyButton : styles.buyAlt}
                onPress={() => null}
              >
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
const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: "100%",
    height: 400,
  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "karla-regular",
    fontSize: 32,
  },
  description: {
    fontFamily: "karla-regular",
    fontSize: 20,
  },
  price: {
    fontFamily: "karla-regular",
    fontSize: 32,
    color: colors.secondary,
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
  buyText: {
    color: "#fff",
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
});
