import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import Home from '../screens/Home'
import Header from '../components/Header';


const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={
      ({navigation, route}) => ({
          header: () => <Header title={route.name} navigation={navigation} />
      })
  }>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})