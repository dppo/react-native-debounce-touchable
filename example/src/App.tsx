import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from '../../src';

export default function App() {
  const [result, setResult] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          console.warn('aaa');
          setResult(result + 1);
        }}
      >
        <Text style={{ height: 40, lineHeight: 40 }}>点击</Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={() => {
          console.warn('bbb');
          setResult(result + 1);
        }}
      >
        <Text style={{ height: 40, lineHeight: 40 }}>点击2</Text>
      </TouchableOpacity>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          console.warn('ccc');
          setResult(result + 1);
        }}
      >
        <Text style={{ height: 40, lineHeight: 40 }}>点击3</Text>
      </TouchableHighlight>
      <TouchableNativeFeedback
        onPress={() => {
          console.warn('ddd');
          setResult(result + 1);
        }}
      >
        <Text style={{ height: 40, lineHeight: 40 }}>点击4</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
