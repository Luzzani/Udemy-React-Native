import React from 'react';
import {View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.cajaMorada, style.caja]} />
      <View style={[style.cajaNaranja, style.caja]} />
      <View style={[style.cajaVerde, style.caja]} />
      <View style={[style.cajaAmarilla, style.caja]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    ...StyleSheet.absoluteFillObject,
    // height: 300,
    // width: 300,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  caja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#FFFFFF',
    position: 'absolute',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    right: 0,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    right: 0,
    bottom: 0,
  },
  cajaVerde: {
    backgroundColor: 'green',
  },
  cajaAmarilla: {
    backgroundColor: 'yellow',
    bottom: 0,
  },
});

// cajaPantallaCompleta: {...StyleSheet.absoluteFillObject}
//es un short cut de
//cajaPantallaCompleta: {position: 'absolute', left: 0, bottom: 0, right: 0, top: 0}
