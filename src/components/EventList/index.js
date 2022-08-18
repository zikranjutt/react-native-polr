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
import { useSelector } from "react-redux";

export default function EventList({ item, onPress }) {
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  return (
    <View style={styles.mainViewContainer}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.container}
      >
        <CheckBox
          isLogin
          containerStyle={{ paddingHorizontal: 0 }}
          toggelBox={false}
          iconColor={AppColors.green}
        />
        <View style={styles.innerContainer}>
          <H1 color={theme.color} size={6.5}>
            {item.name}
          </H1>
          <View style={styles.reviews}>
            <CustomText size={4.2} color={theme.color}>
              {item.type + " | " + item.reviews + "  "}
            </CustomText>
            <Stars
              fullStar={
                themeVisible == "dark" ? (
                  <SVGIcon.star />
                ) : (
                  <SVGIcon.starBlack />
                )
              }
              emptyStar={
                themeVisible == "dark" ? (
                  <SVGIcon.emptyStar />
                ) : (
                  <SVGIcon.emptyStarBlack />
                )
              }
              display={Number(item.reviews)}
              spacing={3}
              count={5}
              starSize={13}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Image source={{ uri: item.coverImage }} style={styles.image} />
      <CustomText
        size={3.9}
        textStyles={{ paddingVertical: height(0.7) }}
        color={theme.color}
      >
        These matches are also attending this venue
      </CustomText>
      <View style={styles.row}>
        {item.userImages.map((element, index) => {
          return (
            <Image
              key={String(index)}
              source={{ uri: element.source }}
              style={[
                styles.userImage,
                { marginLeft: index == 0 ? 0 : width(3.4) },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}
