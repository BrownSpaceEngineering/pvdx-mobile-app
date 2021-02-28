import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Space News 
      </Text>
      <View style={styles.articleContainer}> 
        <Text>Nov 17 2020</Text>
        <View style={styles.title}> 
          <Text>hello</Text>
        </View> 
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 50,
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    margin: 35,
  },
  text: { 
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleContainer: {
    padding: 15,
    height: 150,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "white"
  },
  title: {
    paddingTop: 10,
    height: 70,
    width: "100%",
  },
})

export default HomeScreen;