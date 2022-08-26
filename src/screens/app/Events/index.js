import React from "react";
import { FlatList, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../assets/Svg";
import EventList from "../../components/EventList";
import Header from "../../components/MapViewHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import { H1 } from "../../components/Text";
import { eventList } from "../../DummyData";
import { CalenderScreenName } from "../../routes/navigation/screenNames";
import AppColors from "../../utills/AppColors";
import CommonStyles from "../../utills/CommonStyles";
import styles from "./styles";
export default function EventsScreent(props) {
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  const renderItem = ({ item }) => {
    return <EventList item={item} />;
  };
  return (
    <ScreenWrapper
      componentId={props.componentId}
      backgroundImage={false}
      transclucent={true}
    >
      <View
        style={[
          styles.mainViewContainer,
          { backgroundColor: theme.bottomSheetBackground },
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
          onPressLeft={() =>
            Navigation.pop(props.componentId, {
              component: {
                name: CalenderScreenName,
              },
            })
          }
          textField={false}
          calenderIcon={false}
        />
        <H1
          textStyles={CommonStyles.marginTop_4}
          color={AppColors.primaryColor}
          size={11.5}
        >
          Events
        </H1>
        <H1
          textStyles={CommonStyles.marginTop_5}
          color={AppColors.primaryColor}
          size={7.9}
        >
          {props.date}
        </H1>
        <View style={styles.innerContainer}>
          <FlatList
            data={eventList}
            keyExtractor={(ite, index) => String(index)}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={CommonStyles.paddingBottom_10}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
