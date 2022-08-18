import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: width(4),
    marginTop: height(1.8),
  },
  titileText: {
    color: AppColors.white,
    fontSize: width(4),
    marginLeft: width(3),
    marginBottom: height(1),
  },
  dropDownContainerStyle: {
    backgroundColor: "white",
    borderLeftWidth: width(1),
    borderRightWidth: width(1),
    borderBottomWidth: width(1),
    borderColor: "white",
    borderBottomLeftRadius: width(4),
    borderBottomEndRadius: width(4),
    width: "81.5%",
    height: height(10),
  },
  DropDownStyle: {
    overflow: "hidden",
    backgroundColor: "transparent",
    borderColor: AppColors.white,
    borderWidth: width(0.6),
    borderRadius: width(10),
    width: width(75),
    paddingVertical: height(0.1),
    minHeight: height(5),
  },
});
export default styles;
