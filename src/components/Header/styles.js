import { Platform, StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: width(3),
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: width(0.1),
    borderBottomColor: AppColors.white,
    width: width(100),
    paddingVertical: height(1),
    marginTop:Platform.OS=='ios'? height(4): height(2)
  },
  innerCountainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    width: width(65),
    alignItems: "center",
  },
  leftContainer:{
    height:height(5),
    width:height(5),
    alignItems:'center',
    justifyContent:'center'
  },
  rightContainer:{
    height:height(5),
    width:height(5),
    alignItems:'center',
    justifyContent:'center'
  },
  row:{
    alignItems:'center',
    flexDirection:'row',
    marginLeft:width(5)
  }
});
export default styles;
