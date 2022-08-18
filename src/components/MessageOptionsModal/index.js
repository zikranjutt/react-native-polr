import React from "react";
import { TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import CloseIcon from "../../assets/Svg/CloseIcon";
import AppColors from "../../utills/AppColors";
import Button from "../Button";
import { CustomText, H1 } from "../Text";
import MatchImage from "../../assets/Images/match.png";
import styles from "./styles";
import Avatar from "../Avatar";
import CommonStyles from "../../utills/CommonStyles";
export default function MessageOptionsModal({
  isVisible,
  onClose,
  source,
  title = "Kyra B",
  status = "Active now",
  activeStatus=false
}) {
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
        <View style={styles.imgContainer}>
          <Avatar editButton={activeStatus} source={source} size={60} uri />
          <View style={CommonStyles.marginLeft_3}>
            <H1 color={AppColors.black} size={6}>
              {title}
            </H1>
            <CustomText color={AppColors.black}>{status}</CustomText>
          </View>
        </View>
        <View style={styles.row}>
          <Button
            title={"Remove Match"}
            containerStyle={styles.btn1}
            textStyle={{ color: AppColors.black50 }}
          />
        </View>
        <View style={styles.row}>
          <Button
            title={"Report"}
            containerStyle={styles.btn2}
            textStyle={{ color: AppColors.black50 }}
          />
          <Button
            title={"Block"}
            containerStyle={styles.btn3}
            textStyle={{ color: AppColors.black50 }}
          />
        </View>
      </View>
    </Modal>
  );
}
