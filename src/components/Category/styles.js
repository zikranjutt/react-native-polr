import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
import { getTheme } from "../../utills/Methods";
const theme =getTheme()
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryColor,
    paddingHorizontal: width(4),
    paddingVertical: height(0.6),
    borderRadius: height(3),
  },
  simpleContainer: {
    backgroundColor: AppColors.transparent,
    paddingHorizontal: width(4),
    paddingVertical: height(0.6),
    borderRadius: height(3),
    borderWidth: width(0.3),
    borderColor:theme.color,
  },
});
export default styles;
