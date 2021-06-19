import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

const withDebouncedTouchable =
  (WrappedComponent: React.ComponentType) => (props) => {
    const clickHandler = useDebouncedCallback(
      () => {
        if (props.onPress) {
          props.onPress();
        }
      },
      300,
      { leading: true, trailing: false }
    );
    return <WrappedComponent {...props} onPress={clickHandler} />;
  };

export const DebouncedTouchableWithoutFeedback = withDebouncedTouchable(
  TouchableWithoutFeedback
);

export const DebouncedTouchableOpacity =
  withDebouncedTouchable(TouchableOpacity);
