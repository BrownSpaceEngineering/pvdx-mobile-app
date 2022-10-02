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
import { Social } from "../components/Social";
import { NavCard } from "../components/NavCard";

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <Card
        children={
          <>
            <Text style={styles.title}>Who we are</Text>
            <Text style={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </>
        }
      />
      <Card
        children={
          <>
            <Text style={styles.title}>What we do</Text>
            <Text style={styles.body}>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Text>
            </Text>
          </>
        }
      />
      <ScrollView style={styles.rowContainer} horizontal={true}>
        <Card
          children={
            <>
              <Text style={styles.title}>Avionics</Text>
              <Text style={styles.body}>We do avionics stuff</Text>
            </>
          }
        />
        <Card
          children={
            <>
              <Text style={styles.title}>Flight Software</Text>
              <Text style={styles.body}>We do flight software stuff</Text>
            </>
          }
        />
      </ScrollView>
      <Card
        children={
          <>
            <Text style={styles.title}>Something other title text</Text>
            <Text style={styles.body}>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Text>
            </Text>
          </>
        }
      />
      <Card
        children={
          <>
            <Text style={styles.title}>News</Text>
            <View style={styles.container}>
              <Text style={styles.boxOne}>
                <Text style={styles.blackBox}> </Text>
                Follow @BSE
              </Text>
            </View>
          </>
        }
      />
      <Card
        children={
          <>
            <Text style={styles.bodyBig}>Twitter Feed</Text>
            <View style={styles.container}></View>
          </>
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "2%",
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
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
  bodyBig: {
    fontSize: 36,
    padding: 55,
    color: "#E4E5EA",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "#1DA1F2",
    width: "60%",
    padding: 10,
  },
  blackBox: {
    flex: 1,
    backgroundColor: "white",
    width: "5%",
  },
  bigBox: {
    flex: 1,
    margin: "2%",
    width: "40%",
    height: "70%",
  },
  title: {
    fontSize: 18,
    color: "#E4E5EA",
    fontWeight: "bold",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  smallCard: {
    width: "30%",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#333436",
  },
});

export default AboutUs;
