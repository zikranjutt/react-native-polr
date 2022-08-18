import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { height } from "react-native-dimension";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
import AppColors from "../../utills/AppColors";
import CrushModal from "../CrushModal";
import { CustomText } from "../Text";
import styles from "./styles";
export default function GeofenceProfileModal({
  isVisible,
  onClose,
  item,
  onPressCrush,
}) {
  const [premiumModal, setPremiumModal] = useState(false);
  const theme = useSelector((state) => state.Config.theme);
  return (
    <Modal
      animationInTiming={2000}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      isVisible={isVisible}
      backdropOpacity={0.4}
      onModalHide={onClose}
      onBackdropPress={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.container}
      >
        <Image source={{ uri: item.image }} style={styles.image} />

        <LinearGradient
          colors={theme.imageTransparent}
          style={styles.linearGradient}
        >
          <View style={styles.name}>
            <View>
              <Text style={[styles.nameText]}>{item.name ?? ""}</Text>
              <CustomText
                color={AppColors.white}
                size={4.7}
                lineHeight={height(2.4)}
              >
                {item.age + "," + " " + item.city}
              </CustomText>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setPremiumModal(true)}
            >
              <SVGIcon.crush />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <CrushModal
        isVisible={premiumModal}
        onClose={() => setPremiumModal(false)}
      />
    </Modal>
  );
}
