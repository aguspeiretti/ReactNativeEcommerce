import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from "react-redux";
import store from "./src/store/Index";

export default function App() {
  const [fontLoaded] = useFonts({
    "karla-regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <SafeAreaView style={styles.safe}>
        <Provider store={store}>
          <TabNavigator />
        </Provider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: 40,
  },
});
