import React, { useState } from "react";
import { Switch, View } from "react-native";
import { Navigation } from "react-native-navigation";
import MapViewHeader from "../../components/MapViewHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import SettingButtons from "../../components/SettingButtons";
import { H1 } from "../../components/Text";
import {
  PremiumScreenName,
  ProfileScreenName,
} from "../../routes/navigation/screenNames";
import AppColors from "../../utills/AppColors";
import CommonStyles from "../../utills/CommonStyles";
import styles from "./styles";
import Securtiy from "../../assets/Images/securtiy.png";
import Privacy from "../../assets/Images/privacy.png";
import Payment from "../../assets/Images/payment.png";
import Account from "../../assets/Images/account.png";
import { selectedMode, setDarkTheme } from "../../redux/slices/configSlice";
import { useDispatch, useSelector } from "react-redux";
import { mainRote } from "../../routes/navigation/main";
import { Dark, Light } from "../../utills/Theme";
import { SVGIcon } from "../../assets/Svg";
export default function SettingPrivacy(props) {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  const selectedTheme = useSelector(selectedMode);
  const callFunction = () => {
    dispatch(setDarkTheme(selectedTheme == "dark" ? "light" : "dark"));
    Navigation.setDefaultOptions({
      bottomTab: {
        fontSize: 14,
        selectedFontSize: 14,
        iconColor:
          selectedTheme == "dark" ? Light.bottomTabIcons : Dark.bottomTabIcons,
      },
      bottomTabs: {
        backgroundColor:
          selectedTheme == "dark" ? Light.background : Dark.background,
        titleDisplayMode: "alwaysHide", 
        elevation: 0,
        hideShadow: true,
      },
      layout: { direction: "locale" },
      animations: {
        push: {
          waitForRender: true,
        },
        pop: {
          waitForRender: true,
        },
        setStackRoot: {
          waitForRender: true,
        },
        showModal: {
          waitForRender: true,
        },
        dismissModal: {
          waitForRender: true,
        },
      },
      topBar: {
        visible: false,
      },
      statusBar: {
        // drawBehind:true,
        // translucent:true,
        // backgroundColor:AppColors.transparent,
      },
      hardwareBackButton: {
        popStackOnPress: true,
        dismissModalOnPress: true,
        bottomTabsOnPress: "previous",
      },
    });
    Navigation.setRoot(mainRote);
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
        <MapViewHeader
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
                name: ProfileScreenName,
              },
            })
          }
          centerIcon={
            themeVisible == "dark" ? <SVGIcon.polr /> : <SVGIcon.polrBlack />
          }
          calenderIcon={false}
          textField={false}
        />
        <View style={{ alignItems: "center" }}>
          <H1
            textStyles={CommonStyles.paddingBottom_3}
            color={AppColors.orange}
          >
            Settings & Privacy
          </H1>
          <SettingButtons />
          <SettingButtons title={"Security"} source={Securtiy} />
          <SettingButtons title={"Privacy"} source={Privacy} />
          <SettingButtons
            title={"Payments"}
            source={Payment}
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: PremiumScreenName,
                },
              })
            }
          />
          <SettingButtons title={"Account"} source={Account} />
          <SettingButtons
            title={"Light Theme"}
            source={Account}
            rightIconType={
              <Switch
                trackColor={{ false: "#767577", true: "#3e3e3e" }}
                thumbColor={
                  selectedTheme == "dark" ? AppColors.black20 : AppColors.white
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={callFunction}
                value={selectedTheme != "dark"}
              />
            }
            // onPress={() =>}
          />
        </View>
        <View />
        <View />
      </View>
    </ScreenWrapper>
  );
}
