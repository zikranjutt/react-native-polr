import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "~utills/AppColors";
const styles = StyleSheet.create({
  mainViewContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
  inputCountainer: {
    alignItems: "center",
    marginTop: height(20.2),
  },
  inputInnerCountainer: {
    marginTop: height(7),
    marginBottom: height(1.5),
  },
  footerText: {
    alignItems: "center",
    marginTop: height(3),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:height(3)
  },
});
export default styles;
