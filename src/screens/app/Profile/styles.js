import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
  bottomSheet: {
    height: height(5),
    width: width(100),
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.black20,
  },  image: {
    height:height(100),
    width: width(100),
    justifyContent:'space-between',
    paddingVertical:height(4)
  },
  
});

export default styles;
