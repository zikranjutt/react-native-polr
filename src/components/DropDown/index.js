import React, { useState } from "react";
import { View } from "react-native";
import { height, width } from "react-native-dimension";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
import AppColors from "../../utills/AppColors";
import { CustomText } from "../Text";
import styles from "./styles";

export default function DropDown({
  value = null,
  setValue,
  items,
  setItems,
  title,
  DropDownStyle,
  titileTextStyle,
  countainerStyle,
  dropDownContainerStyle,
  open,
  setOpen,
  arrowCountainer = { paddingRight: width(3) },
  isLogin = true,
  placeholder
}) {
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  return (
    <>
      <View style={[styles.mainContainer, countainerStyle]}>
        {title && (
          <CustomText
            textStyles={[styles.titileText, titileTextStyle]}
            color={isLogin ? AppColors.white : theme.color}
          >
            {title}
          </CustomText>
        )}
        <DropDownPicker
          placeholder={placeholder}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{
            color: isLogin ? AppColors.white : theme.color,
            fontSize: width(3.3),
          }}
          listItemLabelStyle={{
            color: AppColors.black,
          }}
          style={[styles.DropDownStyle, DropDownStyle]}
          showTickIcon={false}
          ArrowDownIconComponent={() => {
            return themeVisible=='dark' ? <SVGIcon.arrowDown /> : <SVGIcon.arrowDownBlack />;
          }}
          arrowIconContainerStyle={arrowCountainer}
          ArrowUpIconComponent={() => {
            return themeVisible=='dark' ? <SVGIcon.arrowDown /> : <SVGIcon.arrowDownBlack />;
          }}
          itemSeparatorStyle={0}
          dropDownContainerStyle={[
            styles.dropDownContainerStyle,
            dropDownContainerStyle,
          ]}
          theme="LIGHT"
        />
      </View>
      {open && <View style={{ marginTop: height(10) }} />}
    </>
  );
}
