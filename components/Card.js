import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Card = ({ width = null, children = null }) => {
  return <View style={[styles.card, { width: width }]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: "96%",
    margin: "2%",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#333436",
  },
});
