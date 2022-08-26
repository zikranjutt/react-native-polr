import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: height(3),
    marginBottom: height(6),
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
  row: {
    flexDirection: "row",
    marginTop: height(3),
    alignItems:'center'
  },
 
  img: {
    width:width(14),
  },
});
export default styles;
