import React, { useCallback } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Choice from "../Choice";
import { ACTION_OFFSET } from "../utils/constants";
import { styles } from "./styles";
import RoundButton from "../RoundButton";
 import LinearGradient from "react-native-linear-gradient";
import { height } from "react-native-dimension";
 import { useSelector } from "react-redux";
import AppColors from "~utills/AppColors";
import { CrushDarkIcon } from "~assets/Svg/SettingIcons";
import { CustomText } from "~components";
import { SVGIcon } from "~assets/Svg";
export default function Card({
  name,
  source,
  isFirst,
  swipe,
  tiltSign,
  handleChoice = () => {},
  onPressName,
  onPressCrush,
  index,
  slectedIndex,
  age = 23,
  city = "Kelowna",
  disabled = false,
  ...rest
}) {
  const theme = useSelector((state) => state.Config.theme);
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, ACTION_OFFSET],
    outputRange: [0, 4],
    extrapolate: "clamp",
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -25],
    outputRange: [4, 0],
    extrapolate: "clamp",
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            { opacity: likeOpacity },
          ]}
        >
          <Choice source={require("../../../../assets/images/like.png")} />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            { opacity: nopeOpacity },
          ]}
        >
          <Choice source={require("../../../../assets/images/disLike.png")} />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}
    >
      <ImageBackground
        source={{ uri: source }}
        style={[styles.image, { backgroundColor: theme.background }]}
        resizeMode="cover"
      >
        <View style={styles.title}>
          {slectedIndex > 0 ? (
            <View style={styles.container3}>
              <RoundButton
                disabled={disabled}
                name="back"
                size={40}
                color={AppColors.white}
                IconName={SVGIcon.backButton}
                counatinerStyle={false}
                onPress={() => {
                  handleChoice(-1);
                }}
              />
            </View>
          ) : (
            <View style={styles.container3} />
          )}
          <SVGIcon.polr />
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
          <TouchableOpacity activeOpacity={0.7} onPressOut={onPressCrush}>
            <CrushDarkIcon color={theme.color} />
          </TouchableOpacity>
        </LinearGradient>
        {isFirst && renderChoice()}
      </ImageBackground>
    </Animated.View>
  );
}
