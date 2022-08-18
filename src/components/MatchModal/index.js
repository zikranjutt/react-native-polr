import React from "react";
import { TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import CloseIcon from "../../assets/Svg/CloseIcon";
import AppColors from "../../utills/AppColors";
import Button from "../Button";
import { H1 } from "../Text";
import MatchImage from "../../assets/Images/match.png";
import styles from "./styles";
import Avatar from "../Avatar";
export default function MatchModal({ isVisible, onClose }) {
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
        <H1 color={AppColors.primaryColor}>It’s a match!</H1>
        <View style={styles.imgContainer}>
          <Avatar source={MatchImage} size={90} />
          <Avatar
            size={90}
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
            containerStyle={{ left: -20 }}
          />
        </View>
        <Button
          title={"Message"}
          containerStyle={styles.btn}
          textStyle={{ color: AppColors.black50 }}
        />
      </View>
    </Modal>
  );
}
