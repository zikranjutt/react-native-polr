import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  containerStyles: {
    width: width(90),
    flexDirection: "row",
    borderRadius: width(10),
    borderWidth: width(0.3),
    borderColor: AppColors.white,
  },
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS == "ios" ? height(5) : height(6),
    width: "80%",
    alignSelf: "center",
    backgroundColor: AppColors.transparent,
    paddingHorizontal: width(6),
    color: AppColors.white,
    marginBottom: height(0.2),
  },
  errorText: {
    color: AppColors.red,
    paddingHorizontal: width(5),
    fontSize: width(2.8),
    marginBottom: height(0.5),
  },
  btn: {
    borderWidth: 0,
    width: "20%",
    paddingHorizontal: 0,
  },
});
export default styles;
