import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={style.container}>
      <Text style={[style.caja, style.caja1]}>Caja 1</Text>
      <Text style={[style.caja, style.caja2]}>Caja 2</Text>
      <Text style={[style.caja, style.caja3]}>Caja 3</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AD0021',
  },
  caja: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fontSize: 30,
  },
  caja1: {
    color: '#FFFFFF',
  },
  caja2: {
    color: '#DDDDDD',
  },
  caja3: {
    color: '#AFAFAF',
  },
});
