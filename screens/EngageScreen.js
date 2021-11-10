import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Card } from "../components/Card";

const EngageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card children={<Text style={styles.body}>About us!</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    fontSize: 16,
    color: "#E4E5EA",
  },
});

export default EngageScreen;
