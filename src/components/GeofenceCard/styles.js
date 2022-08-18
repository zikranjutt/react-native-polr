import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  mainViewContainer: {
  },
  container: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    width: width(80),
  },
  innerContainer: {
    marginLeft: width(4),
  },
  reviews: {
    flexDirection: "row",
    alignItems:'center'
  },
  text: {
    color: AppColors.white,
    fontSize: width(3.2),
    marginLeft: width(2),
    fontWeight: "bold",
  },
  image: {
    height: height(43),
    width: width(92),
    marginBottom: height(1),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width:width(25),
    justifyContent:'space-between'
  },
  userImage: {
    height: height(4.5),
    width: height(4.5),
    borderRadius: height(10),
    marginTop: height(0.5),
    marginBottom: height(3),
    marginTop: height(2),
  },
});
export default styles;
