import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { RgihtIcon } from "../../assets/Svg/SettingIcons";
import { CustomText } from "../Text";
import AppColors from "../../utills/AppColors";
import Notification from "../../assets/Images/notification.png";
import { useSelector } from "react-redux";
export default function SettingButtons({
  title = "Notifications",
  source = Notification,
  onPress,
  rightIconType,
}) {
  const theme = useSelector((state) => state.Config.theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.mainViewContainer}
    >
      <View style={styles.innerContainer}>
        <Image source={source} style={styles.img} resizeMode={"contain"} />
        <CustomText justify color={theme.color} size={5}>
          {title}
        </CustomText>
      </View>
      {rightIconType ? rightIconType : <RgihtIcon color={theme.color} />}
    </TouchableOpacity>
  );
}
