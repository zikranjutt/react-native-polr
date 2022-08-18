import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: height(50),
    width: width(100),
  },
  mapStyle: {
    ...StyleSheet.absoluteFill,
  },
  recenterContainer: {
    height: height(5),
    width: height(5),
    borderRadius: height(2.5),
    backgroundColor: AppColors.white,
    position: "absolute",
    right: width(4),
    bottom: height(4),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dot: {
    height: height(2),
    width: height(2),
    borderRadius: height(1),
    backgroundColor: AppColors.primaryColor,
  },
  marker: {
    height: height(5),
    width: width(7),
    resizeMode: "contain",
    top: -5,
  },
  currnetMarkerContainer: {
    height: height(2),
    width: height(2),
    borderRadius: height(2),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  currentMarker: {
    height: height(4.5),
    width: height(4.5),
    borderRadius: height(5),
    backgroundColor: AppColors.primaryColor,
    alignItems:'center',
    justifyContent:'center',
  },
});
export default styles;
