import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "../screens/Categories";
import ProductsByCategory from "../screens/ProductsByCategory";
import ProductsDetailScreen from "../screens/ProductsDetailScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categorias">
        <Stack.Screen name="Categorias" component={Categories} />
        <Stack.Screen name="Productos" component={ProductsByCategory} />
        <Stack.Screen name="Detalle" component={ProductsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
