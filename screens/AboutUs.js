import * as React from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import { Card } from "../components/Card";

const AboutUs = () => {
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "2%",
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

export default AboutUs;
