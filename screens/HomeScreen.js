import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavCard } from "../components/NavCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavCard
        height={200}
        background={require("../assets/pvdx1.png")}
        onPress={() => navigation.navigate("Gallery")}
      >
        {<Text style={styles.title}>Gallery</Text>}
      </NavCard>
      <NavCard height={250} onPress={() => navigation.navigate("Data")}>
        {<Text style={styles.title}>Data</Text>}
        <Text style={styles.body}>TBD</Text>
      </NavCard>
      <View style={styles.rowContainer}>
        <NavCard
          height={180}
          width={"46%"}
          onPress={() => navigation.navigate("Map")}
          background={require("../assets/pvdx1.png")}
        >
          {<Text style={styles.title}>Map</Text>}
        </NavCard>
        <NavCard
          height={180}
          width={"46%"}
          background={require("../assets/pvdx1.png")}
          onPress={() => navigation.navigate("CADScreen")}
        >
          {<Text style={styles.title}>CAD</Text>}
        </NavCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "2%",
    flex: 1,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    paddingTop: 10,
    fontSize: 16,
    color: "#E4E5EA",
  },
  title: {
    fontSize: 24,
    color: "#E4E5EA",
    fontWeight: "bold",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});

export default HomeScreen;
