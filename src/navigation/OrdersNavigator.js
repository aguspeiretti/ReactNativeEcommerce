import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import OrdersScreen from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Órdenes">
      <Stack.Screen name="Órdenes" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
