import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "../screens/Categories";
import ProductsByCategory from "../screens/ProductsByCategory";
import ProductsDetailScreen from "../screens/ProductsDetailScreen";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categorias"
    screenOptions={
      ({navigation, route}) => ({
          header: () => <Header title={route.name} navigation={navigation} />
      })
  }>
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
