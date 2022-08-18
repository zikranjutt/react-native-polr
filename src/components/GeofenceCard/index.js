import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppColors from "../../utills/AppColors";
import CheckBox from "../CheckBox";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
import Stars from "react-native-stars";
import { SVGIcon } from "../../assets/Svg";
import { height, width } from "react-native-dimension";
import CommonStyles from "../../utills/CommonStyles";
import HeartToggel from "../../assets/Svg/HeartToggel";
import CommentToggelIcon from "../../assets/Svg/CommentToggelIcon";
import BookMarkToggelIcon from "../../assets/Svg/BookMarkToggelIcon";
import { useSelector } from "react-redux";

export default function GeofenceCard({ item, onPress }) {
  const theme = useSelector((state) => state.Config.theme);
  return (
    <View style={styles.mainViewContainer}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.container}
      ></TouchableOpacity>
      <Image source={{ uri: item.coverImage }} style={styles.image} />
      <View style={styles.row}>
        <HeartToggel color={theme.color} />
        <CommentToggelIcon color={theme.color} />
        <BookMarkToggelIcon color={theme.color} />
      </View>
      <CustomText
        size={4.5}
        fontWeight={"500"}
        textStyles={{ paddingVertical: height(0.7), marginBottom: height(2) }}
        color={theme.color}
      >
        {item.about}
      </CustomText>
    </View>
  );
}
