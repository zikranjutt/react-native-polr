import {
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AppColors from "../../utills/AppColors";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
import CheckBox from "../CheckBox";
import { SVGIcon } from "../../assets/Svg";
import CommonStyles from "../../utills/CommonStyles";
import { height, width } from "react-native-dimension";
import TextField from "../TextField";
import { CameraModal } from "../CameraModal";
import ImageBox from "../ImageBox";
import {
  BachelorsDegree,
  PhotoGraphy,
  Relegion,
} from "../../assets/Svg/PhotoGraphy";
import DropDown from "../DropDown";
import { favDrink, lastConcert } from "../../utills/Data";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
export default function BottomSheetEditProfile({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmoking, setIsSmoking] = useState(true);
  const theme = useSelector((state) => state.Config.theme);
  const selectedTheme = useSelector((state) => state.Config.selectedTheme);

  const cameraRef2 = useRef(null);
  const [profileImages, setProfileImages] = useState(["", ""]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [keyboard, setKeyboard] = useState(0);
  const [selectedData, setSelectedData] = useState({
    favDrink: "",
    lastConcert: "",
  });
  const renderItem = ({ item, index }) => {
    return (
      <ImageBox
        containerStyle={{ width: 99.1, height: 99.1, marginRight: width(3) }}
        imageStyle={{ width: 99.1, height: 99.1, marginRight: width(3) }}
        changeBackground
        imageUri={item}
        onPress={() => {
          setSelectedIndex(index);
          cameraRef2.current.show();
        }}
      />
    );
  };
  useEffect(() => {
    if (Platform.OS === "android") {
      Keyboard.addListener("keyboardDidShow", (event) => {
        setKeyboard(event.endCoordinates.height - height(14));
      });
      Keyboard.addListener("keyboardDidHide", (event) => {
        setKeyboard(0);
      });
    }
  }, []);

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: theme.bottomSheetBackground,
        marginTop: keyboard,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={[
          styles.container,
          { backgroundColor: theme.bottomSheetBackground },
        ]}
      >
        <TextField placeholder={`Hey! i'm Noah`} maxLength={50} />
        <TextField placeholder={"Lorem ipsum dolor sit amet, consectetur."} />
        <View style={styles.infoContainer}>
          <View style={styles.age}>
            <CustomText color={theme.color} size={4.3}>
              Age
            </CustomText>
            <CustomText
              textStyles={{ marginTop: height(1) }}
              color={AppColors.yellow}
              lineHeight={28}
              size={7}
            >
              23
            </CustomText>
          </View>
          <View style={styles.height}>
            <CustomText color={theme.color} size={4.3}>
              Height
            </CustomText>
            <CustomText
              textStyles={{ marginTop: height(1) }}
              color={AppColors.primaryColor}
              lineHeight={28}
              size={7}
            >
              5’7”
            </CustomText>
          </View>
          <View style={styles.city}>
            <CustomText
              textStyles={CommonStyles.paddingLeft_4}
              color={theme.color}
              size={4.3}
            >
              City
            </CustomText>
            <TextField
              placeholder={"Vancouver"}
              containerStyles={{ width: width(40), paddingTop: height(0.5) }}
            />
          </View>
        </View>
        <View style={styles.drinking}>
          <CheckBox
            onPress={() => setIsVisible(!isVisible)}
            IconType={
              isVisible ? (
                <SVGIcon.dynamicCheckTick />
              ) : (
                <SVGIcon.dynamicCheckCross />
              )
            }
            title={"Drinking"}
            textSize={5}
          />
          <CheckBox
            onPress={() => setIsSmoking(!isSmoking)}
            IconType={
              isSmoking ? (
                <SVGIcon.dynamicCheckTick />
              ) : (
                <SVGIcon.dynamicCheckCross />
              )
            }
            title={"Smoking"}
            textSize={5}
          />
        </View>
        <View style={styles.flatList}>
          <FlatList
            horizontal
            data={profileImages}
            renderItem={renderItem}
            keyExtractor={(ite, ind) => String(ind)}
            style={{ marginVertical: height(3) }}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={CommonStyles.marginLeft_2} />
            )}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              let temp = [...profileImages];
              temp.push("");
              setProfileImages(temp);
            }}
            style={CommonStyles.paddingLeft_5}
          >
            {selectedTheme == "dark" ? (
              <SVGIcon.plusIcon />
            ) : (
              <SVGIcon.plusBlack />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.profession}>
          {/* <SVGIcon.photograhfer /> */}
          <PhotoGraphy width={30} height={30} />
          <TextField
            placeholder={`Web Developer`}
            containerStyles={{ width: width(54), paddingTop: height(2.5) }}
          />
        </View>
        <View style={styles.profession}>
          <BachelorsDegree />
          <TextField
            placeholder={`Bachelors Degree`}
            containerStyles={{ width: width(54), paddingTop: height(2.5) }}
          />
        </View>
        <View style={styles.profession}>
          <Relegion />
          <TextField
            placeholder={`Christian`}
            containerStyles={{ width: width(54), paddingTop: height(2.5) }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={CommonStyles.paddingVertical}
        >
          {selectedTheme == "dark" ? (
            <SVGIcon.plusIcon />
          ) : (
            <SVGIcon.plusBlack />
          )}
        </TouchableOpacity>
        <DropDown
          open={open == "favDrink"}
          setOpen={() =>
            open == "favDrink" ? setOpen(null) : setOpen("favDrink")
          }
          value={selectedData?.favDrink}
          setValue={(value) => {
            setSelectedData({ ...selectedData, favDrink: value() });
          }}
          isLogin={false}
          items={favDrink}
          DropDownStyle={{
            borderRadius: 0,
            borderColor: theme.color,
            borderWidth: width(0.35),
          }}
          dropDownContainerStyle={{
            borderRadius: 0,
            borderColor: theme.color,
            borderRightWidth: width(0.35),
            borderLeftWidth: width(0.35),
            borderBottomWidth: width(0.35),
          }}
          countainerStyle={{
            paddingHorizontal: 0,
            marginTop: 0,
            borderRadius: 0,
          }}
          arrowCountainer={{ paddingRight: width(1) }}
          placeholder={"My favourite drink..."}
        />
        <TextField
          placeholder={`Hey! i'm Noah`}
          containerStyles={CommonStyles.paddingTop_2}
        />
        <DropDown
          isLogin={false}
          open={open == "lastConcert"}
          setOpen={() =>
            open == "lastConcert" ? setOpen(null) : setOpen("lastConcert")
          }
          isLogin={false}
          value={selectedData?.lastConcert}
          setValue={(value) => {
            setSelectedData({ ...selectedData, lastConcert: value() });
          }}
          items={lastConcert}
          countainerStyle={{
            paddingHorizontal: 0,
            marginTop: 0,
            borderRadius: 0,
          }}
          DropDownStyle={{
            borderRadius: 0,
            borderColor: theme.color,
            borderWidth: width(0.35),
          }}
          dropDownContainerStyle={{
            borderRadius: 0,
            borderColor: theme.color,
            borderRightWidth: width(0.35),
            borderLeftWidth: width(0.35),
            borderBottomWidth: width(0.35),
          }}
          arrowCountainer={{ paddingRight: width(1) }}
          placeholder={"The last concert I went to"}
        />
      </ScrollView>
      <CameraModal
        ref={cameraRef2}
        onFilesSelected={(image) => {
          let temp = [...profileImages];
          temp[selectedIndex] = image?.uri;
          setProfileImages(temp);
        }}
      />
      {/* <TouchableOpacity 'waiting for client review'
        style={styles.closeIcon}
        onPress={onclose}
        activeOpacity={0.8}
      >
        <CloseIcon colorIcon={false} />
      </TouchableOpacity> */}
    </KeyboardAwareScrollView>
  );
}
