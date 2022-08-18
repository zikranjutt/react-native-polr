import React from "react";
import { View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { width } from "react-native-dimension";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
import AppColors from "../../utills/AppColors";
// import SVGIcons, { LeftIconSvg, RightIconSvg } from "~assets/svg";
import styles from "./styles";

const Calendar = ({ ModalContainerStyle = {}, onDateChange }) => {
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  return (
    <View style={[styles.container, ModalContainerStyle ?? []]}>
      <CalendarPicker
        startFromMonday={true}
        initialDate={new Date()}
        minDate={new Date()}
        enableDateChange={true}
        selectedDayTextColor={AppColors.primaryColor}
        selectedDayTextStyle={styles.selectedDayTextStyle}
        selectedDayStyle={styles.selectedDayStyle}
        headerWrapperStyle={{ justifyContent: "center" }}
        previousComponent={
          themeVisible == "dark" ? (
            <SVGIcon.backIcon />
          ) : (
            <SVGIcon.backIconBlack />
          )
        }
        nextComponent={
          themeVisible == "dark" ? (
            <SVGIcon.rightIcon />
          ) : (
            <SVGIcon.rightIconBlack />
          )
        }
        dayLabelsWrapper={styles.dayLabelsWrapper}
        customDatesStyles={() => {
          return { textStyle: [styles.dateStyles, { color: theme.color }] };
        }}
        disabledDatesTextStyle={styles.desableDateStyles}
        customDayHeaderStyles={() => {
          return { textStyle: styles.headerStyle };
        }}
        todayBackgroundColor={AppColors.transparent}
        todayTextStyle={{ color: theme.color }}
        monthTitleStyle={[styles.headerText, { color: theme.color }]}
        yearTitleStyle={{
          color: AppColors.transparent,
          position: "absolute",
        }}
        weekdays={["S", "M", "T", "W", "T", "F", "S"]}
        onDateChange={onDateChange}
      />
    </View>
  );
};
export default Calendar;
