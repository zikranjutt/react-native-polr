import React from "react";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { SVGIcon } from "../../assets/Svg";
import styles from "./styles";
export default function CrushModal({ isVisible, onClose }) {
  return (
    <Modal
      animationInTiming={2000}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      isVisible={isVisible}
      backdropOpacity={0}
      onModalHide={onClose}
      onBackdropPress={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.container}
      >
        <SVGIcon.crushGif />
      </TouchableOpacity>
    </Modal>
  );
}
