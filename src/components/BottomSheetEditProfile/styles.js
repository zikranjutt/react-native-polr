import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: height(25),
    alignItems: "center",

  },
  container: {
    width: width(100),
    alignSelf: "center",
    backgroundColor: AppColors.black20,
    paddingTop: height(7),
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
    width: "100%",
    justifyContent: "space-evenly",
    marginLeft:width(4)
  },
  drinking: {
    flexDirection: "row",
    width:'100%',
    marginLeft:width(10)
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
    width: "100%",
    alignItems:'center',
  },
  mainImage: {
    height: height(20),
    width: "100%",
    marginTop: height(3),
  },
  flatList:{
    flexDirection:'row',
    alignItems:"center",
    marginLeft:width(10)
  },
  profession:{
    flexDirection:'row',
    alignItems:'center',
    width:width(65),
    justifyContent:'space-between',
    height:height(7),
  }
});
export default styles;
