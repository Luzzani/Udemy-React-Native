import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/Button';
import {styles} from '../theme/appTheme';
import useCalculadora from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    btnDiv,
    btnMult,
    btnRestar,
    btnSumar,
    buildNumber,
    calcular,
    clean,
    cleanLastEntry,
    number,
    positiveNegative,
    prevNumber,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.resultPrev}>{prevNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="C" bgColor="#9B9B9B" onAction={clean} />
        <Button text="+/-" bgColor="#9B9B9B" onAction={positiveNegative} />
        <Button text="del" bgColor="#9B9B9B" onAction={cleanLastEntry} />
        <Button text="/" bgColor="#FF9427" onAction={btnDiv} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="7" onAction={buildNumber} />
        <Button text="8" onAction={buildNumber} />
        <Button text="9" onAction={buildNumber} />
        <Button text="X" bgColor="#FF9427" onAction={btnMult} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="4" onAction={buildNumber} />
        <Button text="5" onAction={buildNumber} />
        <Button text="6" onAction={buildNumber} />
        <Button text="-" bgColor="#FF9427" onAction={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="1" onAction={buildNumber} />
        <Button text="2" onAction={buildNumber} />
        <Button text="3" onAction={buildNumber} />
        <Button text="+" bgColor="#FF9427" onAction={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="0" ancho onAction={buildNumber} />
        <Button text="." onAction={buildNumber} />
        <Button text="=" bgColor="#FF9427" onAction={calcular} />
      </View>
    </View>
  );
};
