import * as React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Card = ({
  title, 
  height = 200,
  onPress = null, 
  children = null,
  background = null
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 5, flexGrow: 1 }}>
      <ImageBackground source={background} style={styles.image}/>
      <View style={[styles.card, { height: height }]}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Image style={styles.arrow} source={require('../assets/arrow-right.png')}/>
        </View>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    padding: 15,
    borderRadius: 15,
    flexGrow: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    color: "#E4E5EA",
    fontWeight: "bold",
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    position: 'absolute',
    top: 7.5,
    right: 0,
    opacity: 0.5,
  },
  image: {
    flex: 1,
    height: 200,
    resizeMode: 'cover',
  },
});