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
  btn: {
    borderColor: AppColors.black50,
  },
  closeIcon: {
    position: "absolute",
    top: -height(1),
    right: -width(1),
  },
  matchImage:{
    height:height(15),
    width:height(15),
    borderRadius:height(10),
    marginVertical:height(1)
  },
  imgContainer:{
    paddingVertical:height(2),
    alignItems:'center',
    flexDirection:'row-reverse',
    marginLeft:width(4)
  }
});
export default styles;
