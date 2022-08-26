import { Dimensions, Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height:
      Platform.OS == "android"
        ? SCREEN_HEIGHT - height(14)
        : SCREEN_HEIGHT - height(9.2),
  },
  image: {
    height: "100%",
    justifyContent: "space-between",
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
    height: Platform?.OS == "ios" ? height(22) : height(15),
    width: width(100),
    paddingHorizontal: width(3),
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: height(1.5),
  },
  name: {
    paddingHorizontal: width(1),
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  menuBar: {
        paddingRight: width(3),
      },
});


// import { Platform, StyleSheet } from "react-native";
// import { height, width } from "react-native-dimension";

// export const styles = StyleSheet.create({
//   container: {
//     height: height(100),
//     alignItems: "center",
//   },
//   menuBar: {
//     paddingRight: width(3),
//   },
//   image: {
//     height:'100%',
//     width: width(100),
//   },
 
//   nameText: {
//     fontSize: width(8.5),
//     fontWeight: "500",
//     color: "#fff",
//     zIndex: 1,
//   },
//   title: {
//     position: "absolute",
//     fontSize: width(10),
//     top: height(5),
//     fontWeight: "bold",
//     color: "#fff",
//     flexDirection: "row",
//     width: width(100),
//     paddingHorizontal: width(4),
//     paddingTop: height(1),
//   },
//   choiceContainer: {
//     position: "absolute",
//     top: height(44),
//   },
//   likeContainer: {
//     left: width(31),
//   },
//   nopeContainer: {
//     right: width(32),
//   },
//   container3: {
//     width: width(32),
//     marginLeft: width(2.3),
//   },
//   linearGradient: {
//     // height: height(13),
//     width: width(100),
//     position: "absolute",
//     paddingHorizontal: width(2),
//     height: Platform?.OS == "ios" ? height(22) : height(15),
//     bottom: 0,
//     paddingBottom: height(10),

//   },
// });
