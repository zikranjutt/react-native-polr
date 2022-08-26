import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
const styles = StyleSheet.create({
  mainViewContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingBottom: height(2),
    backgroundColor: AppColors.black20,
  },
  footerContainer: {
    width: width(100),
    backgroundColor: AppColors.black20,
    alignItems: "center",
    position:'absolute',
    top:0,
    zIndex:1,
    paddingTop:height(2),
  },
  input: {
    width: width(90),
    marginBottom: Platform.OS == "ios" ? height(3) : 0,
  },
  chatList: {
    width: width(90),
  },
  textInputView: {
    width: width(98),
    height: height(5),
    borderWidth: width(0.26),
    borderColor: AppColors.red,
    borderRadius: width(10),
    marginBottom: width(1),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal: width(0.7),
  },
  textInput: {
    width: width(75),

    borderRadius: width(10),
    flexDirection: "row",
    // paddingLeft: width(5),
    height: height(5),
    alignItems: "center",
    color: AppColors.white,
    fontWeight: "bold",
  },
  textInput1: {
    width: "80%",

    borderRadius: width(10),
    paddingLeft: width(5),
    height: height(5),
    color: AppColors.white,

    alignSelf: "flex-end",
  },
  textInputButton: {
    width: width(15),
    height: height(3),
    marginRight: width(1),
    borderRadius: width(5),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: AppColors.primary,
    fontSize: width(4.2),
  },
});
export default styles;