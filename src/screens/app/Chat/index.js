import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import ChatInputField from "../../components/ChatInputField";
import ChatList from "../../components/ChatList";
import Header from "../../components/Header";
import MessageOptionsModal from "../../components/MessageOptionsModal";
import ScreenWrapper from "../../components/ScreenWrapper";
import { chat } from "../../DummyData";
import AppColors from "../../utills/AppColors";
import styles from "./styles";
import { Navigation } from "react-native-navigation";
import { MessageScreenName } from "../../routes/navigation/screenNames";
import { height } from "react-native-dimension";
import { useSelector } from "react-redux";

export default function Chat(props) {
  const theme = useSelector((state) => state.Config.theme);
  const flatListRef = useRef();
  const [chatList, setChatList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [chatText, setChatText] = useState("");
  useEffect(() => {
    setChatList(chat.reverse());
  }, []);
  const renderItem = ({ item }) => {
    return <ChatList item={item} source={props.source} />;
  };
  const sendMessage = () => {
    let temp = [...chatList];
    temp.unshift({
      message: chatText,
      fromUser: false,
    });
    setChatList(temp);
    setChatText("");
  };
  return (
    <ScreenWrapper
      componentId={props.componentId}
      backgroundImage={false}
      transclucent={true}
      backgroundColor={theme.bottomSheetBackground}
    >
      <View
        style={[
          styles.footerContainer,
          { backgroundColor: theme.bottomSheetBackground },
        ]}
      >
        <Header
          isLogin
          item={props}
          onPressRight={() => setModalVisible(true)}
          onPressLeft={() =>
            Navigation.pop(props.componentId, {
              component: {
                name: MessageScreenName,
              },
            })
          }
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" && "padding"}
        style={[
          styles.mainViewContainer,
          { backgroundColor: theme.bottomSheetBackground },
        ]}
      >
        <FlatList
          onContentSizeChange={() => {
            flatListRef.current.scrollToIndex({
              index: 0,
              viewOffset: 45,
              animation: true,
            });
          }}
          data={[...chatList, ...chatList]}
          keyExtractor={(it, index) => String(index)}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          contentContainerStyle={{ paddingBottom: height(20) }}
          inverted
        />
        <ChatInputField
          onKeyPress={() =>
            flatListRef.current.scrollToIndex({
              index: 0,
              viewOffset: 45,
              animation: true,
            })
          }
          isLogin
          placeholder={"Message"}
          containerStyles={[
            styles.input,
            { borderColor: theme.color },
            // { marginBottom: Platform.OS == "android" ? marginBot : height(3) },
          ]}
          onChange={setChatText}
          value={chatText}
          onPress={sendMessage}
        />
      </KeyboardAvoidingView>
      <MessageOptionsModal
        activeStatus={props.status}
        title={props.name}
        source={props.source}
        status={props.status?'Active now':'Offline'}
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </ScreenWrapper>
  );
}
