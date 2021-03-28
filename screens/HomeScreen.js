import * as React from 'react';
import { Button, StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NewsArticle } from '../components/NewsArticle';

const HomeScreen = ({navigation}) => {
  const articleList = ['PVDX launched!', 'Elon Musk visited BSE!', 'Christmas Party! Bring your dance shoes!'];

  const renderArticle = () => {
    return articleList.map(item => {
      return <NewsArticle title={item} style={styles.article}/>
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Projects
      </Text>
      <TouchableOpacity style={styles.articleContainer} onPress = {() => navigation.navigate('PVDX')}>
        <Text style={styles.title}>
          PVDX (click to pvdx pagee)
        </Text>
      </TouchableOpacity>
      <Text style={styles.header}>
        Space News 
      </Text>
      {renderArticle()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flex: 1, 
    margin: 35,
  },
  header: { 
    fontSize: 24, 
    fontWeight: "bold",
    marginVertical: 10,
  },
  article: {
    marginBottom: 10,
  },
})

export default HomeScreen;