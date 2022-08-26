import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import AppColors from "../../../../utills/AppColors";
import { SVGIcon } from "../../../../assets/Svg";
import LinearGradient from "react-native-linear-gradient";
import { CustomText } from "../../../../components/Text";
import { height, width } from "react-native-dimension";
import SettingModal from "../../../../components/SettingModal";
import { getTheme } from "../../../../utills/Methods";
import { useSelector } from "react-redux";
import Profile from "../../../../assets/Images/match.png";
export default function Card({
  name = "Deni Daniyal ",
  onPressCrush,
  age = 23,
  city = "Gujranwala",
  onPressSetting,
  onPressPremium,
  settingModalVisible,
  setSettingModalVisible,
  onPressMenuBar,
  onPressLogOut,
  disabled,
}) {
  const theme = useSelector((state) => state.Config.theme);

  return (
    <View style={styles.container}>
    <ImageBackground source={Profile} style={styles.image}>
      <View style={styles.title}>
        <View style={styles.container3}></View>
        <SVGIcon.polr />
        <View
          style={[
            styles.container3,
            {
              alignItems: "flex-end",
              width: width(28),
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPressOut={onPressMenuBar}
            style={styles.menuBar}
            disabled={disabled}
          >
            <SVGIcon.menuIcon />
          </TouchableOpacity>
        </View>
      </View>
      <LinearGradient
        colors={theme.imageTransparent}
        style={styles.linearGradient}
      >
        <View>
          <Text style={[styles.nameText, { color: theme.color }]}>
            {name ?? ""}
          </Text>
          <CustomText color={theme.color} size={6} lineHeight={height(3.4)}>
            {age + "," + " " + city}
          </CustomText>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressCrush}>
          {/* <SVGIcon.crush /> */}
        </TouchableOpacity>
      </LinearGradient>
      <SettingModal
        onPress1={onPressSetting}
        onPress2={onPressPremium}
        isVisible={settingModalVisible}
        onClose={setSettingModalVisible}
        onPressLogOut={onPressLogOut}
      />
    </ImageBackground>
    </View>
  );
}
