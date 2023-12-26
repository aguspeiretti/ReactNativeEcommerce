import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import banner from "../../assets/images/banner-ofertas.png";
import { colors } from "../global/color";
import { SimpleLineIcons } from "@expo/vector-icons";
import Nuevo from "../components/Nuevo";
import Populares from "../components/Populares";

const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageBannerContainer}>
          <Image
            source={banner}
            style={styles.imageBanner}
            resizeMode="cover"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ShopStack")}
            style={styles.touchableOfertas}
          >
            <Text style={styles.offerButton}> Ver Categorias</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.novedadesContainer}>
          <SimpleLineIcons name="star" size={24} color="black" />
          <Text style={styles.title}>Novedades!</Text>
        </View>
        <Nuevo />
        <View style={styles.popularesContainer}>
          <SimpleLineIcons name="screen-desktop" size={24} color="black" />
          <Text style={styles.title}>Populares</Text>
        </View>
        <Populares />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageBannerContainer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBanner: {
    width: "100%",
    height: "100%",
  },
  touchableOfertas: {
    width: "80%",
    height: 60,
    borderWidth: 2,
    borderColor: colors.primaryLight,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryLight,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  offerButton: {
    fontFamily: "karla-regular",
    fontSize: 18,
    color: colors.white,
  },
  novedadesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "karla-regular",
    fontSize: 20,
    paddingLeft: 15,
  },
  popularesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 10,
  },
});
