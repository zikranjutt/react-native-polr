import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
export const H1 = ({
  children = "?",
  center = false,
  italic = false,
  color = AppColors.black,
  onPress = undefined,
  textStyles,
  size = 8,
  textAlign = "auto",
  textProps,
  fontWeight
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      fontStyle: italic ? "italic" : "normal",
      alignSelf: center ? "center" : "auto",
      textAlign: textAlign,
      fontWeight:fontWeight
    },
  });
  return (
    <Pressable disabled={typeof onPress == "undefined"} onPress={onPress}>
      <Text style={[styles.text, textStyles ?? {}]}  {...textProps}>{children}</Text>
    </Pressable>
  );
};
export const HeaderText = ({
  children = "?",
  center = false,
  italic = false,
  color = AppColors.white,
  onPress = undefined,
  textStyles,
  size = 16,
  textAlign = "center",
  textProps
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      fontStyle: italic ? "italic" : "normal",
      alignSelf: center ? "center" : "auto",
      textAlign: textAlign,
      fontWeight:'500'
    },
  });
  return (
    <Pressable disabled={typeof onPress == "undefined"} onPress={onPress}>
      <Text style={[styles.text, textStyles ?? {}]} {...textProps} >{children}</Text>
    </Pressable>
  );
};
export const CustomText = ({
  children = "?",
  size = 3.5,
  fontWeight = "500",
  letterSpacing = 0,
  lineHeight = width(5),
  underLine,
  center,
  justify,
  right,
  italic = false,
  color = AppColors.black,
  onPress = undefined,
  textStyles,
  numberOfLines = null,
  textProps
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      fontWeight:fontWeight,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      color: color,
      fontStyle: italic ? "italic" : "normal",
      textDecorationLine: underLine ? "underline" : "none",
      textAlign: center
        ? "center"
        : right
        ? "right"
        : justify
        ? "justify"
        : "left",
    },
  });
  return (
    <Pressable disabled={typeof onPress == "undefined"} onPress={onPress}>
      <Text
        style={[styles.text, textStyles ?? {}]}
        numberOfLines={numberOfLines}
        {...textProps}
      >
        {children}
      </Text>
    </Pressable>
  );
};
