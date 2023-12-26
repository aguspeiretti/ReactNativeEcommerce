import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import { StyleSheet } from "react-native";
import { Entypo, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import OrdersNavigator from "./OrdersNavigator";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import { colors } from "../global/color";

const tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <tab.Screen
          name="HomeStack"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={30} color="#fff" />
            ),
          }}
        />
        <tab.Screen
          name="ShopStack"
          component={ShopNavigator}
          options={{
            tabBarIcon: () => <Entypo name="shop" size={30} color="#fff" />,
          }}
        />
        <tab.Screen
          name="CartStack"
          component={CartNavigator}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="cart-minus"
                size={30}
                color="#fff"
              />
            ),
          }}
        />
        <tab.Screen
          name="OrderStack"
          component={OrdersNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="md-newspaper-outline" size={30} color="#fff" />
            ),
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    shadowColor: "#ccc",
    elevation: 0,
    height: 80,
  },
});
