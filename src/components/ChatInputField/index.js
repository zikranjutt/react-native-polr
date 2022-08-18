import React, { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import AppColors from "../../utills/AppColors";
import Button from "../Button";
import styles from "./styles";

const ChatInputField = (
  {
    placeholder = "?",
    keyboardType = "default",
    onSubmitEditing = null,
    containerStyles = {},
    textInputStyle = {},
    secureTextEntry = false,
    blurOnSubmit = true,
    returnKeyType = "default",
    multiline = false,
    numberOfLines = null,
    placeholderTextColor = AppColors.white,
    editable = true,
    textAlignVertical = "center",
    onPress,
    onChange,
    value,
    onBlur,
    selectionColor = AppColors.white,
    onFocus,
    onKeyPress,
    isLogin = false,
  },
  ref
) => {
  const theme = useSelector((state) => state.Config.theme);
  return (
    <View style={[styles.containerStyles, containerStyles]}>
      <TextInput
        onFocus={onFocus}
        selectionColor={isLogin ? AppColors.black : selectionColor}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        placeholderTextColor={!isLogin ? placeholderTextColor : theme.color}
        onChangeText={onChange}
        value={value}
        style={[
          styles.textInput,
          { color: !isLogin ? AppColors.white : theme.color },
          { borderColor: !isLogin ? AppColors.white : theme.color },
          textInputStyle,
        ]}
        secureTextEntry={secureTextEntry}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        textAlignVertical={textAlignVertical}
        onKeyPress={onKeyPress}
      />
      {value ? (
        <Button title={"Send"} containerStyle={styles.btn} onPress={onPress} />
      ) : (
        <View style={styles.btn} />
      )}
    </View>
  );
};

export default forwardRef(ChatInputField);
