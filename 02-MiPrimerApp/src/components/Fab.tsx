import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  toLeft: boolean; // position: 'br' | 'bl' otra forma de hacerlo
  onPress: () => void;
}

export const Fab = ({title, toLeft, onPress}: Props) => {
  const ios = () => {
    return (
      <View
        style={[toLeft ? style.fabLeft : style.fabRight, style.fabLocation]}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.5 }>
          <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      <View
        style={[toLeft ? style.fabLeft : style.fabRight, style.fabLocation]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#6f6dd8', false, 30)}>
          <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};
const style = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  fabRight: {
    right: 25,
  },
  fabLeft: {
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 30,
    alignSelf: 'center',
  },
});
