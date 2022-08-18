import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-crop-picker";
import { SVGIcon } from "../../assets/Svg";
export const CameraModal = forwardRef(
  (
    {
      onFilesSelected,
      mediaType = "photo",
      pickFromCamera = true,
      pickFromGallery = true,
    },
    ref
  ) => {
    const [isVisible, setVisible] = useState(false);
    useImperativeHandle(ref, () => ({
      show: () => {
        setVisible(true);
      },
      hide: () => {
        setVisible(false);
      },
    }));
    const closeModal = () => {
      setVisible(false);
    };
    const openCamera = async () => {
      await ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: false,
        mediaType: mediaType,
      })
        .then((image) => {
          onFilesSelected({
            uri: image.path,
            name: image.path.split("/").pop(),
            type: image.mime,
          });
          closeModal();
        })
        .catch((err) => console.log(err));
    };
    const openGallery = async () => {
      await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: false,
        mediaType: mediaType,
      })
        .then((image) => {
          onFilesSelected({
            uri: image.path,
            name: image.path.split("/").pop(),
            type: image.mime,
          });
          closeModal();
        })
        .catch((err) => console.log(err));
    };
    return (
      <Modal
        isVisible={isVisible}
        animationIn={"zoomInUp"}
        animationOut={"zoomOutDown"}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        animationInTiming={700}
        animationOutTiming={700}
      >
        <View style={styles.imageModalContainer}>
          <TouchableOpacity style={styles.closeContainer} onPress={closeModal}>
            <SVGIcon.closeIcon />
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            {pickFromCamera && (
              <TouchableOpacity style={styles.picOption} onPress={openCamera}>
                <SVGIcon.simpleCamera />
                <Text style={styles.picOptionText}>
                  {mediaType == "photo" ? "Take Photo" : `Take Video`}
                </Text>
              </TouchableOpacity>
            )}
            <View style={styles.line} />
            {pickFromGallery && (
              <TouchableOpacity style={styles.picOption} onPress={openGallery}>
                <SVGIcon.galaryIcon />
                <Text style={styles.picOptionText}>{"Choose from Gallery"}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    );
  }
);
