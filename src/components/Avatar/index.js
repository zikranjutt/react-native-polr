import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import AppColors from "../../utills/AppColors";
export default Avatar = ({
  source,
  size = 130,
  editButton = false,
  onEditPress,
  avatarStyle,
  editButtonStyle,
  containerStyle = {},
  uri = false,
}) => {
  const styles = StyleSheet.create({
    containerStyle: {
      height: size,
      width: size,
      overflow: "hidden",
    },
    imageContainer: {
      height: size,
      width: size,
      borderRadius: size / 2,
      borderColor: AppColors.white,
      backgroundColor: AppColors.white100,
    },
    editButtonContainer: {
      height: size / 4.5,
      width: size / 4.5,
      borderRadius: size / 2,
      backgroundColor: AppColors.green,
      position: "absolute",
      bottom: 4,
      right: 4,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
  });
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {uri ? (
        <Image
          source={{ uri: source }}
          style={[styles.imageContainer, avatarStyle ?? {}]}
        />
      ) : (
        <Image
          source={source}
          style={[styles.imageContainer, avatarStyle ?? {}]}
        />
      )}
      {editButton && (
        <TouchableOpacity
          onPress={onEditPress}
          style={[styles.editButtonContainer, editButtonStyle ?? {}]}
        ></TouchableOpacity>
      )}
    </View>
  );
};
