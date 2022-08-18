import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { height, width } from "react-native-dimension";
import MapView, { Marker } from "react-native-maps";
import darkMapStyle from "./darkMapStyle";
// import {Icons} from '../../assets';
import styles from "./styles";
import RNLocation from "react-native-location";
import { CustomText } from "../Text";
import AppColors from "../../utills/AppColors";
import { useSelector } from "react-redux";

const Map = (
  {
    disableMap = false,
    initialLocation,
    onRegionChangeComplete,
    showsUserLocation = false,
    containerStyle,
    markers,
  },
  ref
) => {
  const themeVisible = useSelector((state) => state.Config.selectedTheme);
  const [markersState, setMarkersState] = useState([]);
  const [myLocation, setMyLocation] = useState([]);
  const MapRef = useRef(null);
  useImperativeHandle(ref, () => ({
    animateCamera: recentermap,
  }));
  useEffect(() => {
    getInitialCoords();
  }, []);
  const getInitialCoords = async () => {
    const permision = RNLocation.requestPermission({
      ios: "whenInUse", // or 'always'
      android: {
        detail: "coarse", // or 'fine'
        rationale: {
          title: "We need to access your location",
          message: "We use your location to show where you are on the map",
          buttonPositive: "OK",
          buttonNegative: "Cancel",
        },
      },
    });
    if (permision) {
      const location = await RNLocation.getLatestLocation({ timeout: 1000 });
      setMyLocation(location);
      recentermap({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0221,
        longitudeDelta: 0.0221,
      });
      // if (dateSelected) {
      let temp = [...markers];
      let newMarkers = new Array(3).fill(null).map((item, i) => {
        temp[i] = {
          ...temp[i],
          cords: {
            latitude: location.latitude + Number("0.00" + i + "1"),
            longitude: location.longitude + Number("0.00" + i + "2"),
          },
        };
        // if (i < 3)
        return {
          latitude: location.latitude + Number("0.00" + i + "1"),
          longitude: location.longitude + Number("0.00" + i + "2"),
          id: String(i),
        };
        // else
        // return {
        //   latitude: location.latitude - Number("0.00" + i + "1"),
        //   longitude: location.longitude - Number("0.00" + i + "2"),
        //   id: String(i),
        // };
      });
      setMarkersState(temp);
      fitToCoordinates(newMarkers);
    }
  };
  const recentermap = async (coords = initialLocation) => {
    MapRef.current.animateCamera(
      {
        center: coords,
        zoom: 12,
      },
      { duration: 1000 }
    );
  };
  const fitToCoordinates = async (coords = []) => {
    MapRef.current.fitToCoordinates(coords, {
      edgePadding: {
        top: height(45),
        right: width(25),
        bottom: Platform.OS == "ios" ? height(38) : height(65),
        left: width(3),
      },
      animated: true,
    });
  };
  return (
    <View
      style={[
        styles.container,
        // { height: height(mapHeight), width: width(mapWidth) },
        containerStyle,
      ]}
    >
      <MapView
        ref={MapRef}
        userInterfaceStyle={themeVisible == "dark" ? "dark" : "light"}
        // mapType='mutedStandard'
        customMapStyle={themeVisible == "dark" ? darkMapStyle : {}}
        initialRegion={initialLocation}
        // showsUserLocation
        // zoomEnabled={!disableMap}
        scrollEnabled={!disableMap}
        // onMapReady={onMapReady}
        onRegionChangeComplete={onRegionChangeComplete}
        style={[styles.mapStyle]}
      >
        {showsUserLocation &&
          markersState.length > 0 &&
          markersState.map((item, index) => {
            return (
              <Marker
                key={String(index)}
                coordinate={{
                  latitude: item.cords.latitude,
                  latitudeDelta: 0.0221,
                  longitude: item.cords.longitude,
                  longitudeDelta: 0.0221,
                }}
              >
                <View
                  style={[
                    styles.currentMarker,
                    { backgroundColor: item.color },
                  ]}
                >
                  <CustomText
                    size={5.4}
                    lineHeight={20}
                    color={AppColors.white}
                  >
                    {item.id}
                  </CustomText>
                </View>
              </Marker>
            );
          })}
      </MapView>
      {/* <TouchableOpacity
        style={styles.recenterContainer}
        onPress={() => getInitialCoords()}
      >
        <View style={styles.dot} />
      </TouchableOpacity> */}
    </View>
  );
};
export default forwardRef(Map);
