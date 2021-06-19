import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DebouncedTouchableWithoutFeedback } from '../../src';

export default function App() {
  return (
    <View style={styles.container}>
      <DebouncedTouchableWithoutFeedback
        onPress={() => {
          console.warn('aaa');
        }}
      >
        <Text>点击</Text>
      </DebouncedTouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
