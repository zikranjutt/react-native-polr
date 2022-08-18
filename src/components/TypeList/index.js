import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { width } from "react-native-dimension";
import { useSelector } from "react-redux";
import AppColors from "../../utills/AppColors";
import CommonStyles from "../../utills/CommonStyles";
import { getTheme } from "../../utills/Methods";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
export default function TypeList({ item, onPress }) {
  const theme = useSelector((state) => state.Config.theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={styles.row}>
        <View style={[styles.circle, { backgroundColor: item.color }]}>
          <CustomText
            lineHeight={25}
            size={6}
            color={AppColors.white}
          >
            {item.id}
          </CustomText>
        </View>
        <View style={styles.innerContainer}>
          <H1 color={theme.color} size={6}>
            {item.name}
          </H1>
          <CustomText size={3.8} color={theme.color}>
            {item.type + " | " + item.distance}
          </CustomText>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <CustomText color={theme.color}>{item.user + " Polr Users"}</CustomText>
        <View style={styles.row}>
          {item.userImages.map((element, index) => {
            return (
              <Image
                key={String(index)}
                source={{ uri: element.source }}
                style={[
                  styles.image,
                  { marginLeft: index == 0 ? 0 : width(1.3) },
                ]}
              />
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
}
