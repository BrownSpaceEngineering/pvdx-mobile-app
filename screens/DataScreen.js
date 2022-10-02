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

const DATA = [
  {
    id: "first",
    content:
      "Solar Panel Info\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "second",
    content: "Battery Info\nLorem ipsum dolor sit amet",
  },
  {
    id: "third",
    content:
      "Other things\nLorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "fourth",
    content: "Even more other things\nLorem ipsum",
  },
  {
    id: "fifth",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "sixth",
    content:
      "This is a test, asdfjlas dfjosdb skelg9ueh fbd98 hajger dfh9hvzoxjvz bh9eh aliubdfhb xv Lorem ipsum :)",
  },
];

const Item = ({ body }) => (
  <Card width="46%" children={<Text style={styles.body}>{body}</Text>} />
);

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
      <FlatList
        pointerEvents="none"
        data={DATA}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={(item) => <Item body={item.item.content} />}
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

export default DataScreen;
