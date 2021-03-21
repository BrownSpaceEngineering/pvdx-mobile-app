import * as React from 'react';
import { Alert, Linking, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from 'react-native';

export default function NewsButton({ title, date, url, image }) {
  // this argument needs a better name
  const openURL = (u) => {
    if (u) {
      Linking.openURL(u).catch(() => Alert.alert(`Don't know how to open URI: ${u}`))
    }
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => openURL(url)}>
      <View style={styles.textContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode='contain' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: '12%',
    marginTop: 10,
    borderColor: '#888',
    backgroundColor: '#DDD',
    borderRadius: 10,
  },
  textContainer: {
    paddingLeft: '5%',
    // paddingRight: '5%',
    width: '70%',
  },
  date: {
    paddingTop: '5%',
    paddingBottom: '2%',
    fontWeight: "400",
    letterSpacing: 2,
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageContainer: {
    width: '30%',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  }
})