import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(80),
    paddingVertical: height(2),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: width(10),
  },
  text: {
    color: AppColors.black,
    fontSize: width(3.2),
    marginLeft: width(2),
    fontWeight: "bold",
  },
  innerContainer: {
    paddingVertical: height(2),
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    borderColor: AppColors.black50,
  },
  closeIcon: {
    position: "absolute",
    top: -height(1),
    right: -width(1),
  },
});
export default styles;
