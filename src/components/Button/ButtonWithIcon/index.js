import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import AppColors from "~utills/AppColors";
 import styles from "./styles";

const ButtonWithIcon = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  icon = () => null,
  innerCountainerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}
    >
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="small" />
      ) : (
        <View style={[styles.innerCountainer, innerCountainerStyle]}>
          {icon()}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
