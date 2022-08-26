import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ScreenWrapper from "../../../components/ScreenWrapper";
import styles from "./styles";
import Map from "../../../components/map";
import MapViewHeader from "../../../components/MapViewHeader";
import CategoryComponent from "../../../components/Category";
import { category, typeDetail } from "../../../DummyData";
import CommonStyles from "../../../utills/CommonStyles";
import TypeList from "../../../components/TypeList";
import { height } from "react-native-dimension";
import TypeDetail from "../../../components/TypeDetail";
import { Navigation } from "react-native-navigation";
import {
  CalenderScreenName,
  GeoFenceScreenName,
} from "../../../routes/navigation/screenNames";
import { useSelector } from "react-redux";
import { SVGIcon } from "../../../assets/Svg";

export default function MapScreen(props) {
  const [detailComponent, setDetailComponent] = useState(false);
  const [detailItem, setDetailItem] = useState("");
  const theme = useSelector((state) => state.Config.theme);
  const themeVisible = useSelector((state) => state.Config.selectedTheme);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <CategoryComponent item={item} />
      </View>
    );
  };
  const renderDetailItem = ({ item }) => {
    return (
      <TypeList
        item={item}
        onPress={() => {
          setDetailComponent(true);
          setDetailItem(item);
        }}
      />
    );
  };
  return (
    <ScreenWrapper
      componentId={props.componentId}
      backgroundImage={false}
      transclucent={true}
    >
      <View style={styles.mainViewContainer}>
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: theme.bottomSheetBackground },
          ]}
        >
          <MapViewHeader
            inputStyle={{ borderColor: theme.color }}
            leftIcon={
              themeVisible == "dark" ? (
                <SVGIcon.backIcon />
              ) : (
                <SVGIcon.backIconBlack />
              )
            }
            rightIcon={
              themeVisible == "dark" ? (
                <SVGIcon.celenderIcon />
              ) : (
                <SVGIcon.celenderIconBlack />
              )
            }
            onPressRight={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: CalenderScreenName,
                },
              })
            }
            onPressLeft={() =>
              Navigation.pop(props.componentId, {
                component: {
                  name: GeoFenceScreenName,
                },
              })
            }
          />
          <FlatList
            horizontal
            data={category}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
            contentContainerStyle={styles.flatListStyle}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Map
          showsUserLocation
          containerStyle={{ height: detailComponent ? height(32) : height(50) }}
          initialLocation={{
            latitude:  33.671387,
            longitude:73.000788,
            latitudeDelta: 0.0221,
            longitudeDelta: 0.0221,
          }}
          markers={typeDetail}
        />
        <View
          style={[
            styles.bottom,
            {
              height: detailComponent ? height(46) : height(30),
              // paddingTop: !detailComponent ? height(4) : 0,
              backgroundColor: theme.bottomSheetBackground,
            },
          ]}
        >
          {detailComponent ? (
            <TypeDetail item={detailItem} />
          ) : (
            <FlatList
              data={typeDetail}
              keyExtractor={(item, index) => String(index)}
              renderItem={renderDetailItem}
              contentContainerStyle={styles.flatListStyle}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={CommonStyles.paddingBottom_17}
            />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
