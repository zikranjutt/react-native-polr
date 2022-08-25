import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import {Button, H1, ScreenWrapper} from '~components';
import CommonStyles from '~utills/CommonStyles';
import {CameraModal} from '~components/CameraModal';
import ImageBox from '~components/ImageBox';
import AppColors from '~utills/AppColors';
import {SVGIcon} from '~assets/Svg';
import ScreenNames from '~routes/routes';

export default function ProfilePicture(props) {
  const cameraRef2 = useRef(null);
  const [profileImages, setProfileImages] = useState(['', '']);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const renderItem = ({item, index}) => {
    return (
      <ImageBox
        imageUri={item}
        onPress={() => {
          setSelectedIndex(index);
          cameraRef2.current.show();
        }}
      />
    );
  };
  return (
    <ScreenWrapper
      backgroundImage
      transclucent
      footerUnScrollable={() => (
        <View style={styles.footer}>
          <Button title={'Back'} onPress={() => props.navigation.goBack()} />
          <Button
            title={'Next'}
            onPress={() => props.navigation.navigate(ScreenNames.ALLSETPROFILE)}
          />
        </View>
      )}>
      <View style={styles.container}>
        <SVGIcon.polr />
        <View style={styles.innerContainer}>
          <H1 color={AppColors.white} size={7} textAlign={'center'}>
            Add at least two{`\n`} pictures to your profile
          </H1>
          <View style={styles.flatList}>
            <FlatList
              data={profileImages}
              renderItem={renderItem}
              keyExtractor={(ite, ind) => String(ind)}
              numColumns={2}
              style={{marginVertical: height(3)}}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={styles.wrapperStyle}
              ItemSeparatorComponent={() => (
                <View style={CommonStyles.marginTop_2} />
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              let temp = [...profileImages];
              temp.push('', '');
              setProfileImages(temp);
            }}>
            <SVGIcon.plusIcon />
          </TouchableOpacity>
        </View>
        <View />
      </View>
      <CameraModal
        ref={cameraRef2}
        onFilesSelected={image => {
          let temp = [...profileImages];
          temp[selectedIndex] = image?.uri;
          setProfileImages(temp);
        }}
      />
    </ScreenWrapper>
  );
}
