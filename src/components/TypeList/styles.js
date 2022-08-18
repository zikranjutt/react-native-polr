import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: height(1),
    flexDirection: "row",
    alignItems: "center",
    width: width(90),
    justifyContent:'space-between',
    alignSelf:'center'
  },
  circle: {
    height: height(4),
    width: height(4),
    borderRadius: height(4),
    backgroundColor: AppColors.primaryColor,
    justifyContent:"center",
    alignItems:'center'
  },
  innerContainer: {
    marginLeft: width(6),
  },
  text: {
    color: AppColors.white,
    fontSize: width(3.2),
    marginLeft: width(2),
    fontWeight: "bold",
  },
  imageContainer:{

  },
  image: {
    height: height(3),
    width: height(3),
    borderRadius: height(10),
    marginTop:height(0.5)
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  }
});
export default styles;
