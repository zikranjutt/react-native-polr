import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  containerStyles: {
    width: width(75),
  },
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    height:Platform.OS=='ios'? height(5):height(6),
    width: "100%",
    alignSelf: "center",
    backgroundColor: AppColors.transparent,
    borderRadius: width(10),
    borderWidth: width(0.3),
    borderColor: AppColors.white,
    paddingHorizontal: width(6),
    color: AppColors.white,
    marginBottom: height(0.2),
  },
  errorText: {
    color: AppColors.red,
    paddingHorizontal: width(5),
    fontSize: width(2.8),
    marginBottom:height(0.5)
  },
});
export default styles;
