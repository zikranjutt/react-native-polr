import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: AppColors.black20,
  },
  img: {
    height: height(30),
    width: width(100),
  },
  text: {
    marginLeft: width(3),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: height(1),
    justifyContent: "center",
  },
  flatList: {
    marginTop: -height(15),
    paddingBottom: height(20),
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: "space-between",
    width: width(92),
  },
});
export default styles;
