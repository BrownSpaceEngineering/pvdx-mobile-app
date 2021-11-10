import * as React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const NavCard = ({
  title,
  height = 200,
  width = "100%",
  onPress = null,
  children = null,
  background = null,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 6, flexGrow: 1 }}>
      <ImageBackground
        source={background}
        style={{ resizeMode: "cover" }}
        imageStyle={{ height: height, width: width, borderRadius: 15 }}
      />
      <View
        style={[
          styles.card,
          { height: height, width: width },
          background ? styles.card : styles.noImage,
        ]}
      >
        {/* Conditional that includes background color when there is no image */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Image
            style={styles.arrow}
            source={require("../assets/arrow-right.png")}
          />
        </View>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  noImage: {
    backgroundColor: "#333436",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    color: "#E4E5EA",
    fontWeight: "bold",
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    position: "absolute",
    top: 7.5,
    right: 0,
  },
});
