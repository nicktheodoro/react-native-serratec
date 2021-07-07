import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
    <StatusBar hidden />
    <View style={styles.container}>
      
      <View style={styles.topBar} />

      <View style={styles.square} />
      <View style={styles.title} />

      <View style={styles.text}>
        <View style={styles.part1} />
        <View style={styles.part2} />
      </View>
      <View style={styles.separator} />

      <View style={styles.containerBoxs}>
        <View style={styles.containerLine}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>

        <View style={styles.containerLine}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>

        <View style={styles.footer} />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    height: 25,
    backgroundColor: '#50E3C2',
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: '#F5A623',
    alignSelf: 'center',
    marginTop: 36,
  },
  title: {
    height: 30,
    width: '45%',
    alignSelf: 'center',
    backgroundColor: '#F5A623',
    marginTop: 22,
  },
  text: {
    height: 78,
    marginTop: 36,
    flexDirection: 'row',
  },
  part1: {
    flex: 1,
    backgroundColor: '#9013FE',
  },
  part2: {
    flex: 1,
    backgroundColor: '#4A90E2',
  },
  separator: {
    backgroundColor: '#50E3C2',
    height: 13,
  },
  containerBoxs: {
    flex: 1,
    justifyContent: "space-between"
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    height: 60,
    backgroundColor: '#4A90E2',
  },
});

export default App;
