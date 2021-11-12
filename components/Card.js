import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Card = ({ children = null }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    margin: "2%",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#333436",
  },
});
