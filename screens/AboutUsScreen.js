import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import NewsButton from '../components/NewsButton';

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Updates</Text>
      <NewsButton
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cupiditate."
        date="1/1/21"
        url="https://www.google.com"
        image={require("../assets/Planet.png")} />
      <NewsButton
        title="Check out our repo!"
        date="3/21/21"
        url="https://github.com/BrownSpaceEngineering/pvdx-mobile-app/"
        image={require("../assets/pvdx1.png")} />
      <NewsButton
        title="Latest space news"
        date="1/2/21"
        url="https://spaceX.com"
        image={require("../assets/splash.png")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: "5%",
    marginRight: '5%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 48,
  }
})

export default AboutUsScreen;