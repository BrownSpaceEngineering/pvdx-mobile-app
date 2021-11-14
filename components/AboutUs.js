import * as React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const NavCard = ({
  title,
  height = 200,
  onPress = null,
  children = null,
  background = null,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { height: height },
        background ? styles.cardImage : styles.noImage,
      ]}
    >
      {/* <View
      style={[
        { height: height },
        background ? styles.cardImage : styles.noImage,
      ]}
    > */}
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
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.arrow}
          source={require("../assets/arrow-right.png")}
        />
        {children}
      </View>
      {/* </View> */}
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
  title: {
    fontSize: 24,
    color: "#E4E5EA",
    fontWeight: "bold",
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
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
