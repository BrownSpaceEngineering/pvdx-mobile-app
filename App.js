import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello PVDX!</Text>
      <StatusBar style="auto" />
      <Text>Hello I'm Bowen</Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("I have been clicked o___0")} >
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#aaa",
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  }
});
