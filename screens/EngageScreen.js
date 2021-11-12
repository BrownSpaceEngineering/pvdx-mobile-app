import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, Image, View } from "react-native";
import { Card } from "../components/Card";
import { NavCard } from "../components/NavCard";

const EngageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card
        children={
          <View style={{ margin: 6 }}>
            <Text style={styles.title}>Our Mission</Text>
            <Text style={styles.body}>
              Our primary mission is to prove the accessibility of space to
              people of all backgrounds
            </Text>
          </View>
        }
      />
      <Card
        children={
          <View>
            <Text style={styles.title}>How to Join</Text>
            <Text style={styles.body}>
              We have general meetings (almost) every Sunday in BH 161 at 1pm.
            </Text>
            <Text style={styles.body}>
              Feel free to email us at bse@brown.edu to learn more about joining
              or just drop by!
            </Text>
          </View>
        }
      />
      <View style={styles.rowContainer}>
        <Card
          children={
            <View>
              <Image
                style={styles.icon}
                source={require("../assets/bse_logo_white.png")}
              />
              <Text style={styles.label}>Outreach</Text>
            </View>
          }
        />
        <Card
          children={
            <View>
              <Image
                style={styles.icon}
                source={require("../assets/bse_logo_white.png")}
              />
              <Text style={styles.label}>R&D</Text>
            </View>
          }
        />
      </View>
      <View style={styles.rowContainer}>
        <Card
          children={
            <View>
              <Image
                style={styles.icon}
                source={require("../assets/bse_logo_white.png")}
              />
              <Text style={styles.label}>Outreach</Text>
            </View>
          }
        />
        <NavCard
          children={
            <View>
              <Image
                style={styles.icon}
                source={require("../assets/bse_logo_white.png")}
              />
              <Text style={styles.label}>About Us</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    padding: 4,
    flex: 1,
  },
  body: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: "#E4E5EA",
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
  label: {
    fontSize: 18,
    color: "#E4E5EA",
    fontWeight: "bold",
    textAlign: "center",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 35,
    width: 35,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default EngageScreen;
