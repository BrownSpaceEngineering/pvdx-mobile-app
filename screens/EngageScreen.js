import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const EngageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>About us!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EngageScreen;
