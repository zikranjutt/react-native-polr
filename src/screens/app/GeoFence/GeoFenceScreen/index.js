import { View, ImageBackground, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import MapViewHeader from "../../../components/MapViewHeader";
import { SVGIcon } from "../../../assets/Svg";
import { CustomText } from "../../../components/Text";
import AppColors from "../../../utills/AppColors";
import { GeofenceGridList, GeofenceList } from "../../../DummyData";
import CommonStyles from "../../../utills/CommonStyles";
import GeofenceCard from "../../../components/GeofenceCard";
import GeofenceGrid from "../../../components/GeofenceGrid";
import { height } from "react-native-dimension";
import GeofenceProfileModal from "../../../components/GeofenceProfileModal";
export default function MapScreen({ onPressRight }) {
  const [gridVisible, setGridVisible] = useState(true);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const renderItem = ({ item }) => {
    return <GeofenceCard item={item} />;
  };
  const renderGridItem = ({ item }) => {
    return (
      <GeofenceGrid
        item={item}
        onPress={() => {
          setSelectedImage(item);
          setProfileModalVisible(true);
        }}
      />
    );
  };
  return (
    <View style={styles.mainViewContainer}>
      <ImageBackground
        source={{
          uri: "https://media.istockphoto.com/photos/lovely-little-independent-coffee-shop-picture-id1218963825?s=612x612",
        }}
        style={styles.img}
      >
        <MapViewHeader
          textField={false}
          polrText={false}
          rightIcon={<SVGIcon.search />}
          leftIcon={<SVGIcon.gridIcon />}
          onPressLeft={() => setGridVisible(!gridVisible)}
          onPressRight={onPressRight}
        />
        <View style={styles.row}>
          <SVGIcon.geofenceIcon />
          <CustomText
            lineHeight={30}
            textStyles={styles.text}
            color={AppColors.white}
            size={7}
            fontWeight={"500"}
          >
            Craft Beer Market
          </CustomText>
        </View>
      </ImageBackground>
      <View
        style={[
          styles.flatList,
          { marginTop: gridVisible ? -height(13) : -height(12) },
        ]}
      >
        {gridVisible ? (
          <FlatList
            key={"_"}
            data={GeofenceList}
            keyExtractor={(ite, index) => String(index)}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={CommonStyles.paddingBottom_17}
          />
        ) : (
          <FlatList
            key={"#"}
            data={GeofenceGridList}
            keyExtractor={(ite, index) => String(index)}
            renderItem={renderGridItem}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.columnWrapperStyle}
            contentContainerStyle={CommonStyles.paddingBottom_17}
            numColumns={3}
          />
        )}
      </View>
      <GeofenceProfileModal
        item={selectedImage}
        isVisible={profileModalVisible}
        onClose={() => setProfileModalVisible(false)}
      />
    </View>
  );
}
