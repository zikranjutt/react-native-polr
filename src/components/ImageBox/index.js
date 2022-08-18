import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { SVGIcon } from "../../assets/Svg";
import AppColors from "../../utills/AppColors";
import styles from "./styles";
export default function ImageBox({
  onPress,
  imageUri,
  changeBackground = false,
  containerStyle,
  imageStyle,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        imageUri ? styles.imageCountainer : styles.container,
        {
          backgroundColor: changeBackground
            ? AppColors.lightGrey
            : AppColors.blurTransperant,
        },
        containerStyle,
      ]}
      onPress={onPress}
    >
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={[styles.img, imageStyle]} />
      ) : (
        <SVGIcon.cameraIcon />
      )}
    </TouchableOpacity>
  );
}
