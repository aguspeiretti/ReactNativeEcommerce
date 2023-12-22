import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import { StyleSheet } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import OrdersNavigator from "./OrdersNavigator";
import { Ionicons } from "@expo/vector-icons";

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
    backgroundColor: "#e29578",
    shadowColor: "#ccc",
    elevation: 1,
    position: "absolute",
    left: 25,
    right: 25,
    bottom: 25,
    height: 80,
    borderRadius: 20,
  },
});
