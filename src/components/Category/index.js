import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import AppColors from "../../utills/AppColors";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
export default function Category({ item, onPress }) {
  const theme = useSelector((state) => state.Config.theme)

  const [colorVisible, setColorVisible] = useState(false);
  return colorVisible ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setColorVisible(!colorVisible)}
      style={[styles.container, { backgroundColor: item.color }]}
    >
      <CustomText size={4.2} justify color={AppColors.white}>
        {item.type}
      </CustomText>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setColorVisible(!colorVisible)}
      style={[styles.simpleContainer,{borderColor:theme.color,}]}
    >
      <CustomText size={4.2} justify color={theme.color}>
        {item.type}
      </CustomText>
    </TouchableOpacity>
  );
}
