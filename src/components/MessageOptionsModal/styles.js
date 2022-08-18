import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(80),
    paddingVertical: height(1),
    justifyContent: "center",
    // alignItems: "center",
    alignSelf: "center",
    borderRadius: width(7),
  },
  btn1: {
    borderColor: AppColors.black50,
    width: width(32),
    paddingVertical: height(1),
    paddingHorizontal: width(0.5),
  },
  btn2: {
    borderColor: AppColors.black50,
    width: width(25),
    paddingVertical: height(1),
    paddingHorizontal: width(0.5),
  },
  btn3: {
    borderColor: AppColors.black50,
    width: width(25),
    paddingVertical: height(1),
    paddingHorizontal: width(0.5),
  },
  closeIcon: {
    position: "absolute",
    top: -height(1),
    right: -width(1),
  },
  matchImage: {
    height: height(15),
    width: height(15),
    borderRadius: height(10),
    marginVertical: height(1),
  },
  imgContainer: {
    paddingBottom: height(1),
    paddingLeft: width(4),
    alignItems: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    paddingTop: height(1),
    width: "70%",
    justifyContent: "space-between",
    marginLeft:width(4)
  },
});
export default styles;
