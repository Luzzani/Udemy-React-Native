import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  bgColor: string;
  ancho: boolean;
  onAction: (textNumber: string) => void;
}

export const Button = ({
  text,
  bgColor = '#2D2D2D',
  ancho = false,
  onAction,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onAction(text)}>
      <View
        style={[
          style.btn,
          {backgroundColor: bgColor},
          {width: ancho ? 180 : 80},
        ]}>
        <Text
          style={{
            ...style.btnTexto,
            color: bgColor === '#9B9B9B' ? '#000000' : '#FFFFFF',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#9D9D9D',
  },
  btnTexto: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
