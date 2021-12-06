import * as React from "react";
import {
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { Card } from "../components/Card";

const DataScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card
        children={
          <Text style={styles.body}>
            Last transmission{"\n"}8 months ago{"\n"}
            Current State: LOW POWER
          </Text>
        }
      />
      <View style={styles.rowContainer}>
        <Card
          width="46%"
          children={
            <View>
              <Text style={styles.body}>Solar Panel Info</Text>
            </View>
          }
        />
        <Card
          width="46%"
          children={
            <View>
              <Text style={styles.body}>Battery Info</Text>
              <Text style={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "2%",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    width: "48%",
  },
  body: {
    fontSize: 16,
    padding: 4,
    color: "#E4E5EA",
  },
});

export default DataScreen;
