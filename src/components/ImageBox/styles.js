import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blurTransperant,
    paddingVertical: height(6),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: width(12),
    // marginTop:height(30)
  },
  imageCountainer: {
    backgroundColor: "red",
  },
  img: { height: height(16.4), width: width(35) },
});
export default styles;
