import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: height(2.5),
    flexDirection: "row",
    alignItems: "center",
    width: width(90),
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
  image: {
    height: height(6.5),
    width: height(6.5),
    borderRadius: height(10),
  },
});
export default styles;
