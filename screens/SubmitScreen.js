import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubmitScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>Submit Code Here</Text>
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
  body: {
    fontSize: 16,
    color: "#E4E5EA",
  },
});

export default SubmitScreen;
