import * as React from 'react';
import { Button, StyleSheet, Image, ImageBackground, Pressable } from 'react-native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { Card } from '../components/Card';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Card title="Data" onPress = {() => navigation.navigate('Data')}>
      </Card>
      <Card title="Map" onPress = {() => navigation.navigate('Map')} background={require('../assets/pvdx1.png')}>
      </Card>
        <Card title="CAD" background={require('../assets/pvdx1.png')}>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:0,
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 24
  }
})

export default HomeScreen;