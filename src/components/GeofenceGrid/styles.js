import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor:AppColors.black
  },
  image: {
    height: height(13),
    width: width(30),
  },
 
});
export default styles;
