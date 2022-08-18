import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: height(0.1),
    width: width(100),
    alignSelf: "center",
    paddingTop:height(4),
    paddingBottom:height(3)
  },
  container2: {
    marginVertical: height(0.1),
    flexDirection: "row",
    width: width(100),
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal:width(4),
  },
  circle: {
    height: height(4),
    width: height(4),
    borderRadius: height(4),
    backgroundColor: AppColors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
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
  imageContainer: {},
  image: {
    height: height(3),
    width: height(3),
    borderRadius: height(10),
    marginLeft: width(1.3),
    marginTop: height(0.5),
  },
  row: {
    flexDirection: "row",
  },
  btn:{
    paddingHorizontal:width(4),
    marginLeft:width(3)
  },
  reviews: {
    flexDirection: "row",
    alignSelf:'center',
    alignItems:'center',
    marginTop:height(1.5),
  },
  restaurantDetailImages:{
    height:height(15),
    width:width(45)
  }
});
export default styles;
