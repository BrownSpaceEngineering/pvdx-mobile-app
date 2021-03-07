import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import NewsButton from '../components/NewsButton';

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Updates</Text>
      <NewsButton title="Lorem ipsum dolor sit amet." date="1/1/21" url="https://www.google.com" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: "5%",
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