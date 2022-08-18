import React from "react";
import { TouchableOpacity, View } from "react-native";
import { height, width } from "react-native-dimension";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
import { BarIcon } from "../../assets/Svg/SettingIcons";
import AppColors from "../../utills/AppColors";
import CommonStyles from "../../utills/CommonStyles";
import Button from "../Button";
import { CustomText } from "../Text";
import styles from "./styles";
export default function SettingModal({
  isVisible,
  onClose,
  onPress1 = () => {},
  onPress2 = () => {},
  onPress3 = () => {},
  onPressLogOut,
}) {
  const theme = useSelector((state) => state.Config.theme);
  return (
    <Modal
      animationInTiming={300}
      animationOutTiming={200}
      isVisible={isVisible}
      backdropOpacity={0.4}
      onModalHide={onClose}
      onBackdropPress={onClose}
      statusBarTranslucent
      style={styles.modal}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: theme.bottomSheetBackground },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ alignSelf: "center" }}
          onPress={onClose}
        >
          <BarIcon color={theme.color} />
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPressOut={() => {
              onClose();
              onPress1();
            }}
            style={styles.box}
          >
            <SVGIcon.setting />
            <CustomText
              textStyles={CommonStyles.paddingLeft_5}
              color={theme.color}
              lineHeight={height(3)}
              size={5.5}
            >
              Settings & Privacy
            </CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPressOut={() => {
              onClose();
              onPress2();
            }}
            style={styles.box}
          >
            <SVGIcon.primumIcon />
            <CustomText
              textStyles={CommonStyles.paddingLeft_4}
              color={theme.color}
              lineHeight={height(3)}
              size={5.5}
            >
              Premium
            </CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPressOut={onPress3}
            style={styles.box}
          >
            <SVGIcon.questionIcon />
            <CustomText
              textStyles={{ paddingLeft: width(6.5) }}
              color={theme.color}
              lineHeight={height(3)}
              size={5.5}
            >
              Help & Support
            </CustomText>
          </TouchableOpacity>
        </View>
        <Button
          title={"Log out"}
          containerStyle={[styles.btn, { borderColor: theme.color }]}
          textStyle={{ color: theme.color  }}
          onPress={onPressLogOut}
        />
      </View>
    </Modal>
  );
}
