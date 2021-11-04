import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Image, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import EngageScreen from "./screens/EngageScreen";
import DataScreen from "./screens/DataScreen";
import CADScreen from "./screens/CADScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: "#303030",
        },
        headerTitleStyle: {
          color: "#E4E5EA",
        },
        cardStyle: { backgroundColor: "#18181A" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Engage" component={EngageScreen} />
      <Stack.Screen name="CADScreen" component={CADScreen} />
      <Stack.Screen name="Data" component={DataScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "#242527",
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image
                  source={require("./assets/pvdx_icon.png")}
                  height={30}
                  resizeMode="contain"
                  style={[
                    styles.iconImage,
                    { tintColor: focused ? "#5574E1" : "#E4E5EA" },
                  ]}
                />
                <Text
                  style={[
                    styles.text,
                    { color: focused ? "#5574E1" : "#E4E5EA" },
                  ]}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Engage"
          component={EngageScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image
                  source={require("./assets/bse_logo_white.png")}
                  height={30}
                  resizeMode="contain"
                  style={[
                    styles.iconImage,
                    { tintColor: focused ? "#5574E1" : "#E4E5EA" },
                  ]}
                />
                <Text
                  style={[
                    styles.text,
                    { color: focused ? "#5574E1" : "#E4E5EA" },
                  ]}
                >
                  Engage
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 16,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 14,
  },
});
