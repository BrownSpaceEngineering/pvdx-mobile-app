import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native";
import { Card } from "../components/Card";

const PVDXScreen = () => {
  return <View style={styles.container}>
    <Card title="Gallery"/>
    <View style={styles.columnsContainer}>
      <View style={styles.column}>
        <Card title="Mission" height={'40%'}>
          <Text style={{ marginTop: 5, width: '90%'}}>Lorem ipsum dolor sit amet, consectetur</Text>
        </Card>
        <Card title="CAD" height={'60%'}/>
      </View>
      <View style={styles.column}>
        <Card title="Data" height={'100%'}/>
      </View>
    </View>
    <Card title="Flight Path"/>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  columnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '40%',
  },
  column: {
    height: '100%',
    width: '50%',
  }
});

export default PVDXScreen;
