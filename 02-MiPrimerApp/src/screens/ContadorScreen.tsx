import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>
      <Fab
        title="+1"
        toLeft={false}
        onPress={() => setContador(contador + 1)}
      />
      <Fab title="-1" toLeft={true} onPress={() => setContador(contador - 1)} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {textAlign: 'center', fontSize: 50, top: -20},
});
