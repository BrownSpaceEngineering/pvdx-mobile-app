import * as React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View } from "react-native";
import { Card } from "../components/Card";

const DataScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataCard}>
        <Text style={styles.body}>
          Last transmission{"\n"}8 months ago{"\n"}
          Current State: LOW POWER
        </Text>
      </View>
      <View style={styles.columnsContainer}>
        <View style={styles.column}>
          <View style={styles.dataCard}>
            <Text style={styles.body}>Solar Panel Info</Text>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={require("../assets/bse_logo_white.png")}
            />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.dataCard}>
            <Text style={styles.body}>Battery Info</Text>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={require("../assets/bse_logo_white.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataCard: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#333436",
  },
  container: {
    flex: 1,
    margin: 15,
  },
  columnsContainer: {
    display: "flex",
    flexDirection: "row",
    height: "40%",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  column: {
    height: "100%",
    width: "48%",
  },
  body: {
    fontSize: 16,
    color: "#E4E5EA",
  },
});

export default DataScreen;
