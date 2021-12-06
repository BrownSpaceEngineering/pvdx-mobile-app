import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, Image, View } from "react-native";
import { Card } from "../components/Card";
import { NavCard } from "../components/NavCard";
import { Social } from "../components/Social";

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
        <NavCard height={"86%"} width={"46%"}>
          <View style={styles.innerCard}>
            <Image
              style={styles.icon}
              source={require("../assets/bse_logo_white.png")}
            />
            <Text style={styles.label}>Outreach</Text>
          </View>
        </NavCard>
        <NavCard height={"86%"} width={"46%"}>
          <View style={styles.innerCard}>
            <Image
              style={styles.icon}
              source={require("../assets/bse_logo_white.png")}
            />
            <Text style={styles.label}>R&D</Text>
          </View>
        </NavCard>
      </View>
      <View style={styles.rowContainer}>
        <NavCard height={"86%"} width={"46%"}>
          <View style={styles.innerCard}>
            <Image
              style={styles.icon}
              source={require("../assets/bse_logo_white.png")}
            />
            <Text style={styles.label}>Equisat</Text>
          </View>
        </NavCard>
        <NavCard
          height={"86%"}
          width={"46%"}
          // onPress={() => }
        >
          <View style={styles.innerCard}>
            <Image
              style={styles.icon}
              source={require("../assets/bse_logo_white.png")}
            />
            <Text style={styles.label}>About Us</Text>
          </View>
        </NavCard>
      </View>
      <Social />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "2%",
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
  innerCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    paddingTop: 8,
    fontSize: 18,
    color: "#E4E5EA",
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
  },
  icon: {
    margin: "1%",
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});

export default EngageScreen;
