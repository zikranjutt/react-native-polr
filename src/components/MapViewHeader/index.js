import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SVGIcon } from "../../assets/Svg";
import TextField from "../TextField";
import styles from "./styles";
export default function MapViewHeader({
  onPressLeft,
  onPressRight,
  item,
  textField = true,
  calenderIcon = true,
  polrText = true,
  leftIcon = <SVGIcon.backIcon />,
  rightIcon = <SVGIcon.celenderIcon />,
  centerIcon = <SVGIcon.polr />,
  inputStyle,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.leftContainer}
        onPress={onPressLeft}
      >
        {leftIcon}
      </TouchableOpacity>
      {textField ? (
        <TextField
          textInputStyle={inputStyle}
          placeholder={"Search"}
          containerStyles={styles.inputStyle}
          showError={false}
        />
      ) : polrText ? (
        centerIcon
      ) : (
        <View />
      )}

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.rightContainer}
        onPress={onPressRight}
      >
        {calenderIcon && rightIcon}
      </TouchableOpacity>
    </View>
  );
}
