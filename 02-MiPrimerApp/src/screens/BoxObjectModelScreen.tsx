import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Box Object Model</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#AD0021',
  },
  title: {
    paddingVertical: 10,
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 5,
  },
});
