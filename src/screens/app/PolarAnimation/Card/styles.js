import { Dimensions, Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
   height:height(80)
  },
  image: {
    // height:height(100),
    height:Platform.OS == "ios"?height(91):height(94),
    justifyContent: "space-between",
    resizeMode:'cover'
    // paddingBottom: Platform.OS == "ios" ? height(0.5) : height(0.5),
  },
  nameText: {
    fontSize: width(8.5),
    fontWeight: "500",
    color: "#fff",
    zIndex: 1,
  },
  title: {
    marginTop: Platform.OS == "android" ? height(6) : height(5),
    fontWeight: "bold",
    color: "#fff",
    flexDirection: "row",
    width: width(100),
    paddingHorizontal: width(4),
    // position: "absolute",
  },
  choiceContainer: {
    position: "absolute",
    top: height(40),
    zIndex: 1,
  },
  likeContainer: {
    left: width(31),
  },
  nopeContainer: {
    right: width(32),
  },
  container3: {
    width: width(32),
    marginLeft: width(2.3),
  },
  linearGradient: {
    height:height(20),
    width: width(100),
    paddingHorizontal: width(3),
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: height(1),
  },
});
