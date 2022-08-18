import React from "react";
import { TouchableOpacity, View } from "react-native";
import { width } from "react-native-dimension";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
import AppColors from "../../utills/AppColors";
import CommonStyles from "../../utills/CommonStyles";
import Avatar from "../Avatar";
import { CustomText } from "../Text";
import styles from "./styles";
export default function Header({
  onPressLeft,
  onPressRight,
  item,
  isLogin = false,
}) {
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  const theme = useSelector((state) => state.Config.theme);
  return (
    <View style={[styles.container, { borderBottomColor: theme.color }]}>
      <View style={styles.innerCountainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.leftContainer}
          onPress={onPressLeft}
        >
          {themeVisible == "light" && isLogin ? (
            <SVGIcon.backIconBlack />
          ) : (
            <SVGIcon.backIcon />
          )}
        </TouchableOpacity>
        <View style={styles.row}>
          <Avatar
            editButton={item.status}
            containerStyle={CommonStyles.marginRight_3}
            size={55}
            source={item.source}
            uri
          />
          <View>
            <CustomText color={theme.color} size={5}>
              {item.name}
            </CustomText>
            <CustomText color={theme.color} size={3.5}>
              {item.status ? "Active now" : "Offline"}
            </CustomText>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.rightContainer}
        onPress={onPressRight}
      >
        {themeVisible == "light" && isLogin ? (
          <SVGIcon.messageOptionsIconBlack />
        ) : (
          <SVGIcon.messageOptionsIcon />
        )}
      </TouchableOpacity>
    </View>
  );
}
