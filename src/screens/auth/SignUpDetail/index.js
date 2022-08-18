import { View, Platform, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SVGIcon } from "../../../assets/Svg";
import { height, width } from "react-native-dimension";
import { CustomText, H1 } from "../../../components/Text";
import AppColors from "../../../utills/AppColors";
import Button from "../../../components/Button";
import {
  ProfilePictureName,
  SignUpScreenName,
} from "../../../routes/navigation/screenNames";
import { Navigation } from "react-native-navigation";
import DropDown from "../../../components/DropDown";
import CheckBox from "../../../components/CheckBox";
import {
  Age,
  genderData,
  maximumAge,
  meetData,
  minimumAge,
} from "../../../utills/Data";
import { ScreenWrapper } from "~components";

export default function SignUpDetail(props) {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(
    { gender: "" },
    { meet: "" },
    { age: "" },
    { minimumAge: "" },
    { maximumAge: "" }
  );
  return (
    <ScreenWrapper
      footerUnScrollable={() => (
        <View style={styles.footer}>
          <Button
            title={"Back"}
            onPress={() =>
              Navigation.pop(props.componentId, {
                component: {
                  name: SignUpScreenName,
                },
              })
            }
          />
          <Button
            title={"Next"}
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: ProfilePictureName,
                },
              })
            }
          />
        </View>
      )}
      componentId={props.componentId}
    >
      <View style={styles.container}>
        <SVGIcon.polr />
        <View style={styles.buttonWithIcon}>
          <DropDown
            open={open == "identity"}
            setOpen={() =>
              open == "identity" ? setOpen(null) : setOpen("identity")
            }
            value={selectedData?.gender}
            setValue={(value) => {
              setSelectedData({ ...selectedData, gender: value() });
            }}
            items={genderData}
            title={"How you identity?"}
          />
          <DropDown
            open={open == "meet"}
            setOpen={() => (open == "meet" ? setOpen(null) : setOpen("meet"))}
            value={selectedData?.meet}
            setValue={(value) => {
              setSelectedData({ ...selectedData, meet: value() });
            }}
            items={meetData}
            title={"Who you want to meet?"}
          />
          <DropDown
            open={open == "age"}
            setOpen={() => (open == "age" ? setOpen(null) : setOpen("age"))}
            value={selectedData?.age}
            setValue={(value) => {
              setSelectedData({ ...selectedData, age: value() });
            }}
            items={Age}
            title={"What is your age?"}
          />
          <View style={styles.range}>
            <CustomText
              center={"left"}
              color={AppColors.white}
              size={4}
              fontWeight={"500"}
              textStyles={{
                paddingBottom: height(0.5),
                paddingTop: height(1.5),
                paddingLeft: width(4),
              }}
            >
              Set your age range
            </CustomText>
            <View style={[styles.row,{marginTop:height(1)}]}>
              <View>
                <DropDown
                  open={open == "minimumAge"}
                  setOpen={() =>
                    open == "minimumAge" ? setOpen(null) : setOpen("minimumAge")
                  }
                  value={selectedData?.minimumAge}
                  setValue={(value) => {
                    setSelectedData({ ...selectedData, minimumAge: value() });
                  }}
                  items={maximumAge}
                  DropDownStyle={{ width: width(30) }}
                  dropDownContainerStyle={{ width: width(30), }}
                  countainerStyle={{ paddingHorizontal: 0, marginTop: 0 }}
                  arrowCountainer={{paddingRight:width(1)}}
                />
              </View>
              <CustomText
                color={AppColors.white}
                size={4.5}
                textStyles={{
                  marginTop: height(1.4),
                }}
              >
                to
              </CustomText>
              <View>
                <DropDown
                  open={open == "maximumAge"}
                  setOpen={() =>
                    open == "maximumAge" ? setOpen(null) : setOpen("maximumAge")
                  }
                  value={selectedData?.maximumAge}
                  setValue={(value) => {
                    setSelectedData({ ...selectedData, maximumAge: value() });
                  }}
                  items={minimumAge}
                  DropDownStyle={{ width: width(30) }}
                  dropDownContainerStyle={{ width: width(30) }}
                  countainerStyle={{ paddingHorizontal: 0, marginTop: 0 }}
                  arrowCountainer={{paddingRight:width(1)}}
                />
              </View>
            </View>
          </View>
          <View style={styles.innerContainer}>
            <View style={[styles.spacing, { marginBottom: 0 }]}>
              <CustomText
                color={AppColors.white}
                size={4.2}
                fontWeight={"normal"}
                textStyles={{ paddingVertical: height(2.5) }}
                center
              >
                To get the most out of Polr,{`\n`}turn on your location
                services.
              </CustomText>
            </View>
            <View
              style={[
                styles.row,
                {
                  justifyContent: "center",
                  alignItems:'center'
                },
              ]}
            >
              <CheckBox />
              <CustomText
                color={AppColors.white}
                size={4}
                fontWeight={"normal"}
              >
                Turn on location services
              </CustomText>
            </View>
            <CustomText
              color={AppColors.white}
              size={4}
              fontWeight={"normal"}
              center
              textStyles={{ paddingVertical: height(1.5) }}
              underLine
            >
              Change location settings
            </CustomText>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
