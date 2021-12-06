import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import { Icon } from "react-native-elements";

export const Social = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="github"
        size={20}
        type="antdesign"
        color="#E4E5EA"
        iconStyle={{ margin: "2%" }}
        onPress={() => {
          Linking.openURL("https://github.com/BrownSpaceEngineering");
        }}
      />
      <Icon
        name="earth"
        size={20}
        type="antdesign"
        color="#E4E5EA"
        iconStyle={{ margin: "2%" }}
        onPress={() => {
          Linking.openURL("https://brownspace.org/");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "5%",
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
  },
});
