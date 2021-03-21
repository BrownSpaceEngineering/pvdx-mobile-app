import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Card = ({
  title, 
  height = 200,
  onPress = null, 
  children = null,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 5, flexGrow: 1 }}>
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
    backgroundColor: "white",
    flexGrow: 1,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
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
  }
});