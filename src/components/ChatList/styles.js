import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  mainViewContainer: {
    width: width(90),
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height(2),

  },
  container2: {
    marginBottom: height(2),
    backgroundColor: AppColors.primaryColor,
    paddingHorizontal: width(3),
    paddingVertical: height(1),
    borderRadius: height(3),
    alignSelf: "flex-end",
  },
  innerContainer: {
    marginLeft: width(6),
  },
  text: {
    backgroundColor: AppColors.blue20,
    paddingHorizontal: width(3),
    paddingVertical: height(0.8),
    borderRadius: height(5),
    marginLeft: width(4),
  },
  image: {
    height: height(5),
    width: height(5),
    borderRadius: height(10),
  },
  heart:{
    position:'absolute',
    right:-width(2),
    top:-height(0.5)
  }
});
export default styles;
