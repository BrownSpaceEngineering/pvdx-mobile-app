import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import { Card } from "../components/Card";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card
        title="Gallery"
        background={require("../assets/pvdx1.png")}
        // onPress={() => navigation.navigate("Gallery")}
      />
      <Card
        title="Data"
        height={250}
        // onPress={() => navigation.navigate("Data")}
      >
        <Text style={styles.data}>TBD</Text>
      </Card>
      <View style={styles.rowContainer}>
        <Card
          title="Map"
          height={180}
          width={180}
          // onPress={() => navigation.navigate("Map")}
          background={require("../assets/pvdx1.png")}
        ></Card>
        <Card
          title="CAD"
          height={180}
          width={180}
          background={require("../assets/pvdx1.png")}
        ></Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    flex: 1,
    margin: 8,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
  data: {
    paddingTop: 10,
    fontSize: 16,
    color: "#E4E5EA",
  },
});

export default HomeScreen;
