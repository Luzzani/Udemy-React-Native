import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {DimensaionesScreen} from './src/screens/DimensaionesScreen';
import {PositionScreen} from './src/screens/PositionScreen';

export const App = () => {
  return (
    // <HolaMundoScreen />;
    // <ContadorScreen />
    <SafeAreaView style={style.container}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensaionesScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0021AD',
  },
});
