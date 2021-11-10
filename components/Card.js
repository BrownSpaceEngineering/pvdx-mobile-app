import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Card = ({ children = null }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#333436",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  body: {
    fontSize: 16,
    color: "#E4E5EA",
  },
});
