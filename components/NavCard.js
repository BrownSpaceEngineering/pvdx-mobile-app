import * as React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export const NavCard = ({
  height = "100%",
  width = "96%",
  onPress = null,
  background = null,
  children = null,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { height: height, width: width },
        background ? styles.cardImage : styles.noImage,
      ]}
    >
      <Image
        source={background}
        resizeMode="cover"
        style={{
          height: height,
          width: "100%",
          borderRadius: 15,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <View style={{ padding: 15 }}>
        {children}
        <Image
          style={styles.arrow}
          source={require("../assets/arrow-right.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    flexGrow: 1,
    margin: "2%",
    borderRadius: 15,
  },
  noImage: {
    flexGrow: 1,
    margin: "2%",
    borderRadius: 15,
    backgroundColor: "#333436",
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    position: "absolute",
    top: 22,
    right: 20,
  },
});
