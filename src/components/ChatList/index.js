import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
import AppColors from "../../utills/AppColors";
import CommonStyles from "../../utills/CommonStyles";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
export default function ChatList({ item, source, onLongPress }) {
  const [visible, setVisible] = useState(false);
  const theme = useSelector((state) => state.Config.theme);
  
  return (
    <View style={styles.mainViewContainer}>
      {item.createdAt && (
        <CustomText
          textStyles={CommonStyles.paddingVertical}
          center
          color={theme.color}
        >
          {item.createdAt}
        </CustomText>
      )}
      {item.fromUser ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.container1}
          onLongPress={() => setVisible(true)}
        >
          <Image source={{ uri: source }} style={styles.image} />
          <View style={styles.text}>
            <CustomText color={AppColors.black}>{item.message}</CustomText>
            {visible && (
              <View style={styles.heart}>
                <SVGIcon.heart />
              </View>
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.container2}>
          {/* <Image source={{ uri: item.source }} style={styles.image} /> */}
          <CustomText justify color={AppColors.white}>
            {item.message}
          </CustomText>
        </View>
      )}
    </View>
  );
}
