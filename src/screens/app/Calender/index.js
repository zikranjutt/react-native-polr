import React from "react";
import { View } from "react-native";
import Calender from "../../components/Calender";
import Header from "../../components/MapViewHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import { H1 } from "../../components/Text";
import AppColors from "../../utills/AppColors";
import styles from "./styles";
import moment from "moment";
import { Navigation } from "react-native-navigation";
import {
  EventsScreenName,
  GeoFenceScreenName,
} from "../../routes/navigation/screenNames";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
export default function CalenderScreen(props) {
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  return (
    <ScreenWrapper
      componentId={props.componentId}
      backgroundImage={false}
      transclucent={true}
    >
      <View
        style={[
          styles.mainViewContainer,
          {
            backgroundColor: theme.bottomSheetBackground,
          },
        ]}
      >
        <Header
          centerIcon={
            themeVisible == "dark" ? <SVGIcon.polr /> : <SVGIcon.polrBlack />
          }
          leftIcon={
            themeVisible == "dark" ? (
              <SVGIcon.backIcon />
            ) : (
              <SVGIcon.backIconBlack />
            )
          }
          textField={false}
          calenderIcon={false}
          onPressLeft={() =>
            Navigation.pop(props.componentId, {
              component: {
                name: GeoFenceScreenName,
              },
            })
          }
        />
        <H1 color={AppColors.primaryColor} size={12}>
          Events
        </H1>
        <View style={styles.innerContainer}>
          <Calender
            onDateChange={(date) => {
              let selectedDate = moment(date).format("MMMM Do");
              Navigation.push(props.componentId, {
                component: {
                  name: EventsScreenName,
                  passProps: { date: moment(date).format("MMMM Do") },
                },
              });
            }}
          />
        </View>
        <View></View>
        <View></View>
      </View>
    </ScreenWrapper>
  );
}
