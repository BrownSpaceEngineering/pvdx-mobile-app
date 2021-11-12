import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavCard } from "../components/NavCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavCard
        title="Gallery"
        background={require("../assets/pvdx1.png")}
        onPress={() => navigation.navigate("Gallery")}
      />
      <NavCard
        title="Data"
        height={250}
        onPress={() => navigation.navigate("Data")}
      >
        <Text style={styles.body}>TBD</Text>
      </NavCard>
      <View style={styles.rowContainer}>
        <NavCard
          title="Map"
          height={180}
          onPress={() => navigation.navigate("Map")}
          background={require("../assets/pvdx1.png")}
        ></NavCard>
        <NavCard
          title="CAD"
          height={180}
          background={require("../assets/pvdx1.png")}
          onPress={() => navigation.navigate("CADScreen")}
        ></NavCard>
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    paddingTop: 10,
    fontSize: 16,
    color: "#E4E5EA",
  },
});

export default HomeScreen;
