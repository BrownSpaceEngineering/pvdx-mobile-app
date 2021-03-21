import * as React from 'react';
import { Button, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Space News 
      </Text>
      <View style={styles.articleContainer}>
        <View style={styles.textContainer}> 
          <Text>Nov 17 2020</Text>
          <View> 
            <Text style={styles.title}> 
            PVDX launch app approved today!
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

      <View style={styles.articleContainer}>
        <Text style={styles.text}>
          PVDX
        </Text>
        <Button title={'PVDX'} onPress = {() => navigation.navigate('PVDX')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 50,
    flex: 1, 
    margin: 35,
  },
  text: { 
    fontSize: 24, 
    fontWeight: "bold",
    marginBottom: 10,
  },
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
  imageContainer: {

  },
  pvdx1: {
    height: 80,
    width: 80,
  },
})

export default HomeScreen;