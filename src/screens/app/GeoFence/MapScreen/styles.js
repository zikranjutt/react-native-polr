import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../../utills/AppColors";
import { getTheme } from "../../../utills/Methods";
const styles = StyleSheet.create({
  mainViewContainer: {
    alignItems: "center",
    flex:1,
    backgroundColor:'red'
  },
  innerContainer: {
    height: height(20),
    alignItems: "center",
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: width(2.5),
    paddingBottom: height(1),
  },
  flatListStyle: {
    marginLeft: width(5),
    paddingRight: width(5),
  },
  bottom: {
    height: height(30),
    width: width(100),
  },
});
export default styles;
