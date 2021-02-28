import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About us!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
})

export default AboutUsScreen;