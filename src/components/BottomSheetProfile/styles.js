import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
import { getTheme } from "../../utills/Methods";
const styles = StyleSheet.create({
  container: {
    width: width(100),
    alignSelf: "center",
    paddingVertical: height(4),
    paddingHorizontal: width(4),
  },
  closeIcon: {
    position: "absolute",
    right: width(4),
    top: height(1.5),
    zIndex: 1,
  },
  infoContainer: {
    flexDirection: "row",
    paddingVertical: height(2),
    width: "100%",
    justifyContent: "space-between",
  },
  drinking: {
    alignItems:'center'
  },
  imageContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: height(3),
  },
  imageStyle: {
    height: height(19),
    width: width(43),
  },
  professionContainer: {
    marginTop: height(4),
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  mainImage: {
    height: height(20),
    width: "100%",
    marginTop: height(3),
  },
});
export default styles;
