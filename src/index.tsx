import React from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableHighlight as RNTouchableHighlight,
  TouchableNativeFeedback as RNTouchableNativeFeedback,
  GestureResponderEvent,
} from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

type HOC<InjectProps> = <Props>(
  Component: React.ComponentType<Props & InjectProps>
) => React.ComponentType<Props>;

const withDebouncedTouchable: HOC<{}> = (WrappedComponent) => (props: any) => {
  const clickHandler = useDebouncedCallback(
    (event: GestureResponderEvent) => {
      if (props.onPress) {
        props.onPress(event);
      }
    },
    300,
    { leading: true, trailing: false }
  );

  return <WrappedComponent {...props} onPress={clickHandler} />;
};

export const TouchableWithoutFeedback = withDebouncedTouchable(
  RNTouchableWithoutFeedback
);
export const TouchableOpacity = withDebouncedTouchable(RNTouchableOpacity);
export const TouchableHighlight = withDebouncedTouchable(RNTouchableHighlight);
export const TouchableNativeFeedback = withDebouncedTouchable(
  RNTouchableNativeFeedback
);
