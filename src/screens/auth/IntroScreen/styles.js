import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: height(4.5),
  },
  btnCountainer: {
    marginTop: height(10),
  },
  button:{
    paddingHorizontal:width(6.5),
    paddingVertical:height(0.7)
  },
  btnText:{
    fontSize:width(5.8)
  }
});
export default styles;
