import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import AppColors from "../../utills/AppColors";
import Avatar from "../Avatar";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
export default function MessageList({ item, onPress }) {
  const theme = useSelector((state) => state.Config.theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Avatar editButton={item.status} source={item.source } size={60} uri />
      <View style={styles.innerContainer}>
        <H1 color={theme.color} size={5.5}>
          {item.name}
        </H1>
        <CustomText color={theme.color}>{item.lastMessage}</CustomText>
      </View>
    </TouchableOpacity>
  );
}
