import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width(25),
    backgroundColor: AppColors.transparent,
    paddingHorizontal: width(10),
    alignSelf: "center",
    paddingVertical: height(1),
    borderWidth: width(0.267),
    borderColor: AppColors.white,
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  },
});
export default styles;
