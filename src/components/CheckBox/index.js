import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { SVGIcon } from "../../assets/Svg";
import { CustomText } from "../Text";
import AppColors from "../../utills/AppColors";
import { width } from "react-native-dimension";
import ToggelBox from "../../assets/Svg/checkBox";
import { useSelector } from "react-redux";
export default function CheckBox({
  IconType = <SVGIcon.emptyBox />,
  visibleIconType = <SVGIcon.checkBox />,
  title,
  color = AppColors.white,
  disabled = false,
  toggelBox = true,
  iconColor,
  containerStyle,
  textSize = 4,
  isLogin = false,
  onPress=false
}) {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useSelector((state) => state.Config.theme);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.container, containerStyle]}
      onPress={() => {
        if (onPress) onPress();
        else setIsVisible(!isVisible);
      }}
    >
      {toggelBox ? (
        isVisible ? (
          visibleIconType
        ) : (
          IconType
        )
      ) : (
        <ToggelBox
          visible={isVisible}
          color={iconColor}
          visibleColor={isLogin ? theme.color : AppColors.white}
        />
      )}
      {title && (
        <CustomText size={textSize} color={isLogin ? color : theme?.color}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
}
