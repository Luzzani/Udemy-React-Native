import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {DimensaionesScreen} from './src/screens/DimensaionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {FlexScreen} from './src/screens/FlexScreen';

export const App = () => {
  return (
    // <HolaMundoScreen />;
    // <ContadorScreen />
    <SafeAreaView style={style.container}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensaionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0021AD',
  },
});
