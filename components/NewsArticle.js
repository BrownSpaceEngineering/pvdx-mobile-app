import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const NewsArticle = ({title, style}) => {
  return (
    <View style={[styles.articleContainer, style]}>
        <View style={styles.textContainer}> 
          <Text>Nov 17 2020</Text>
          <View> 
            <Text style={styles.title}> 
            {title}
            </Text>
          </View> 
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.pvdx1}
            Image source={require("../assets/pvdx1.png")}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    height: 110,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "white",
  },
  textContainer: {
    width: "70%",
  },  
  title: {
    paddingTop: 10,
    height: 70,
    fontWeight: "bold",
    fontSize: 18, 
  },
  pvdx1: {
    height: 80,
    width: 80,
  }
});