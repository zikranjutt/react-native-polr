import React, { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import AppColors from "../../utills/AppColors";
import styles from "./styles";

const TextField = (
  {
    placeholder = "?",
    keyboardType = "default",
    onSubmitEditing = null,
    error = null,
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
    onChange,
    value,
    onBlur,
    selectionColor = AppColors.white,
    onFocus,
    showError = true,
    maxLength,
    isLogin = false,
  },
  ref
) => {
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);

  return (
    <View style={[styles.containerStyles, containerStyles]}>
      <TextInput
        onFocus={onFocus}
        selectionColor={
          themeVisible == "dark" && isLogin ? selectionColor : theme.color
        }
        placeholder={placeholder}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        placeholderTextColor={isLogin ? placeholderTextColor : theme.color}
        onChangeText={onChange}
        value={value}
        style={[
          styles.textInput,
          textInputStyle,
          { color: isLogin ? AppColors.white : theme.color },
          { borderColor: isLogin ? AppColors.white : theme.color },
        ]}
        secureTextEntry={secureTextEntry}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        textAlignVertical={textAlignVertical}
        maxLength={maxLength}
      />
      {showError && (
        <Text style={styles.errorText}>{error ? `*${error}` : ""}</Text>
      )}
    </View>
  );
};

export default forwardRef(TextField);
