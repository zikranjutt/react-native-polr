import React, { useCallback, useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { SVGIcon } from "~assets/Svg";

import { styles } from "./styles";

export default function RoundButton({
  name,
  size,
  color,
  onPress,
  IconName = SVGIcon.apple,
  counatinerStyle = true,
  disabled = false,
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = useCallback(
    (newValue) => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale]
  );

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.8)}
      delayPressIn={0}
      onPressOut={() => {
        animateScale(1);
        onPress();
      }}
      disabled={disabled}
      delayPressOut={110}
    >
      <Animated.View
        style={
          counatinerStyle
            ? [styles.container, { transform: [{ scale }] }]
            : null
        }
      >
        <SVGIcon.backButton />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
