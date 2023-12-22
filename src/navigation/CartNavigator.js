import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "../screens/Categories";
import ProductsByCategory from "../screens/ProductsByCategory";
import ProductsDetailScreen from "../screens/ProductsDetailScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Carrito">
      <Stack.Screen
        name="Carrito"
        component={CartScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e29578",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
