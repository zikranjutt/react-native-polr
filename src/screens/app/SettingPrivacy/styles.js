import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.black20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS == "android" ? height(2) : 0,
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
});
export default styles;
