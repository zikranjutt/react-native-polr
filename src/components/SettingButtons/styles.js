import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  mainViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: width(80),
    justifyContent: "space-between",
    height:height(6),
  },
  innerContainer: {
    flexDirection: "row",
    alignItems:'center',
    width:width(50),
  },
  img: {
    height: height(8),
    width: width(5),
    marginRight:width(5)
  },
});
export default styles;
