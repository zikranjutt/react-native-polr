import { View, Image, ScrollView, Platform } from "react-native";
import React from "react";
import AppColors from "../../utills/AppColors";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
import CheckBox from "../CheckBox";
import { SVGIcon } from "../../assets/Svg";
import CommonStyles from "../../utills/CommonStyles";
import { height } from "react-native-dimension";
import { getTheme } from "../../utills/Methods";
import { useSelector } from "react-redux";
export default function BottomSheetProfile({ onclose }) {
  const theme =useSelector(state=>state.Config.theme)
  return (
    <>
      <ScrollView
        contentContainerStyle={CommonStyles.paddingBottom_17}
        style={[styles.container,{backgroundColor:theme?.bottomSheetBackground}]}
      >
        <H1 color={AppColors.primaryColor} fontWeight={"500"}>
          Hey, I’m Phoebe
        </H1>
        <CustomText
          textStyles={CommonStyles.paddingTop_1}
          size={4}
          color={theme.color}
        >
          Lorem ipsum dolor sit amet, consectetur{`\n`}adipiscing elit, sed do
          eiusmod tempor.
        </CustomText>
        <View style={styles.infoContainer}>
          <View style={styles.age}>
            <CustomText color={theme.color} size={4.3}>
              Age
            </CustomText>
            <CustomText
              textStyles={{ marginTop: height(0.3) }}
              color={AppColors.yellow}
              lineHeight={28}
              size={7}
            >
              23
            </CustomText>
          </View>
          <View style={styles.height}>
            <CustomText color={theme.color} size={4.3}>
              Height
            </CustomText>
            <CustomText
              textStyles={{ marginTop: height(0.3) }}
              color={AppColors.primaryColor}
              lineHeight={28}
              size={7}
            >
              5’7”
            </CustomText>
          </View>
          <View style={styles.city}>
            <CustomText color={theme.color} size={4.3}>
              City
            </CustomText>
            <CustomText
              textStyles={{ marginTop: height(0.3) }}
              color={AppColors.green20}
              lineHeight={25}
              size={6}
            >
              Kelowna
            </CustomText>
          </View>
          <View style={styles.drinking}>
            <CheckBox
              disabled
              IconType={<SVGIcon.dynamicCheckTick />}
              title={"Drinking"}
              textSize={5}
              color={theme.color}
            />
            <CheckBox
            containerStyle={{marginTop:height(1)}}
              disabled
              IconType={<SVGIcon.dynamicCheckCross />}
              title={"Smoking"}
              textSize={5}
              color={theme.color}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
            }}
            style={styles.imageStyle}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
            }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.professionContainer}>
          <View style={styles.profession}>
            <SVGIcon.photograhfer />
            <CustomText
              textStyles={CommonStyles.marginTop_Maximum}
              color={theme.color}
              size={4.3}
            >
              Photographer
            </CustomText>
          </View>
          <View style={styles.profession}>
            <SVGIcon.bacholars />
            <CustomText
              textStyles={CommonStyles.marginTop_Maximum}
              color={theme.color}
              size={4.3}
            >
              Bachelors{`\n`}
            </CustomText>
          </View>
          <View style={styles.profession}>
            <SVGIcon.relgious />
            <CustomText
              textStyles={CommonStyles.marginTop_Maximum}
              color={theme.color}
              size={4.3}
            >
              Athiest
            </CustomText>
          </View>
        </View>
        <H1 color={theme.color} textStyles={CommonStyles.marginTop_4}>
          My favourite drink...
        </H1>
        <CustomText
          lineHeight={Platform.OS == "android" ? 15 : 0}
          size={4.6}
          color={theme.color}
        >
          Lorem ipsum dolor sit amet, consectetur.
        </CustomText>
        <H1 color={theme.color} textStyles={CommonStyles.marginTop_2}>
          The last concert I went to...
        </H1>
        <CustomText
          lineHeight={Platform.OS == "android" ? 15 : 0}
          color={theme.color}
          size={4.6}
        >
          Lorem ipsum dolor sit amet, consectetur
        </CustomText>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
          }}
          style={styles.mainImage}
        />
      </ScrollView>
      {/* <TouchableOpacity 'waiting for client review'
        style={styles.closeIcon}
        onPress={onclose}
        activeOpacity={0.8}
      >
        <CloseIcon colorIcon={false} />
      </TouchableOpacity> */}
    </>
  );
}
