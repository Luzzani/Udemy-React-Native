import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    color: '#FFFFFF',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultPrev: {
    color: 'rgba(255,255,255, .5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
