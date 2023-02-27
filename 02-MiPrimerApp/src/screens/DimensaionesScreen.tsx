import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensaionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={style.container}>
        <View style={{...style.cajaBordo, width: width * 0.2}} />
        <View style={style.cajaNaranja} />
      </View>
      <Text style={style.title}>
        W: {width} H: {height}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'violet',
  },
  cajaBordo: {
    // width: '20%',
    height: '50%',
    backgroundColor: '#AD0021',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
  },
});
