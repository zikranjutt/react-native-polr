import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "~utills/AppColors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width(25),
    backgroundColor: AppColors.white,
    width: width(75),
    alignSelf: "center",
    paddingVertical: height(0.9),
    marginTop: height(2),
  },
  text: {
    color: AppColors.black,
    fontSize: width(5.5),
    fontWeight: "400",
  },
  innerCountainer: {
    flexDirection: "row",
    alignItems: "center",
    width: width(36),
    justifyContent: "space-between",
  },
});
export default styles;
