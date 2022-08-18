import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { height, width } from "react-native-dimension";
import Modal from "react-native-modal";
import { SVGIcon } from "../../assets/Svg";
import CloseIcon from "../../assets/Svg/CloseIcon";
import AppColors from "../../utills/AppColors";
import Button from "../Button";
import { CustomText } from "../Text";
import styles from "./styles";
export default function PremiumModal({ isVisible, onClose }) {
  return (
    <Modal
      animationInTiming={300}
      animationOutTiming={200}
      animationIn={"lightSpeedIn"}
      animationOut={"lightSpeedOut"}
      isVisible={isVisible}
      backdropOpacity={0.4}
      onModalHide={onClose}
      onBackdropPress={onClose}
    >
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.closeIcon}
          onPress={onClose}
        >
          <CloseIcon colorIcon={false} />
        </TouchableOpacity>
        <SVGIcon.crush2 />
        <View style={styles.innerContainer}>
          <CustomText lineHeight={height(3)} size={5}>
            This is a Premium feature
          </CustomText>
          <CustomText center lineHeight={height(1.9)} fontWeight={"400"}>
            Sign up for a Premium account {`\n`}to send Phoebe a Crush
          </CustomText>
        </View>
        <Button
          title={"Learn more"}
          containerStyle={styles.btn}
          textStyle={{ color: AppColors.black50 }}
        />
      </View>
    </Modal>
  );
}
