import * as React from 'react';
import { Alert, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

export default function NewsButton({ title, date, url }) {
  // this argument needs a better name
  const openURL = (u) => {
    if (u) {
      Linking.openURL(u).catch(() => Alert.alert(`Don't know how to open URI: ${u}`))
    }
  }
  return (
    <TouchableOpacity style={styles.button} onPress={() => openURL(url)}>
      <Text>{date}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    width: "90%",
    height: "10%",
    margin: 5,
    padding: 5,
    borderColor: "#AAA",
    backgroundColor: "#666",
    borderRadius: 8,
  },
  date: {
    fontWeight: "200",
    fontSize: 12,
  },
  title: {
    fontSize: 24,

  }
})