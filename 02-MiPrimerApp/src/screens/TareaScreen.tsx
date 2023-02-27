import React from 'react';
import {View, StyleSheet} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.caja, style.cajaMorada]} />
      <View style={[style.caja, style.cajaNaranja]} />
      <View style={[style.caja, style.cajaAzul]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  caja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#FFFFFF',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    top: 50,
  },
  cajaAzul: {
    backgroundColor: '#28C4D9',
  },
});
