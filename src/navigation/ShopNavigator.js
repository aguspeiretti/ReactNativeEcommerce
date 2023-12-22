import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "../screens/Categories";
import ProductsByCategory from "../screens/ProductsByCategory";
import ProductsDetailScreen from "../screens/ProductsDetailScreen";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categorias">
      <Stack.Screen
        name="Categorias"
        component={Categories}
        options={{
          headerStyle: {
            backgroundColor: "#e29578",
          },
        }}
      />
      <Stack.Screen
        name="Productos"
        component={ProductsByCategory}
        options={{
          headerStyle: {
            backgroundColor: "#e29578",
          },
        }}
      />
      <Stack.Screen
        name="Detalle"
        component={ProductsDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e29578",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
