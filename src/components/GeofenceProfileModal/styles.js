import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: height(2),
    width:width(92)
  },
  image: {
    height: height(72),
    width: width(92),
    borderRadius: width(8),
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: width(7.5),
    fontWeight: "500",
    color: "#fff",
    zIndex: 1,
  },
  linearGradient: {
    height: height(8),
    width: '100%',
    position: "absolute",
    bottom: 0,
    paddingHorizontal:width(2),
borderRadius:width(5)
  },
});
export default styles;
