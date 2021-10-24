import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import PVDXScreen from "./screens/PVDXScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#18181A' }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* {// <Stack.Screen name="Data" component={DataScreen} /> */}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={AboutUsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
