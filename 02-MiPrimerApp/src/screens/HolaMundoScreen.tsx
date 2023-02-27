import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#AD2001',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 45, textAlign: 'center'}}>
        Hola Mundo!!!
      </Text>
    </View>
  );
};
