import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { height, width } from "react-native-dimension";
import { useSelector } from "react-redux";
import { H1, ScreenWrapper, TextField } from "~components";
import Avatar from "~components/Avatar"; 
import MessageList from "~components/messageList";
import { messageListData } from "~DummyData";
import CommonStyles from "~utills/CommonStyles";
import styles from "./styles";
export default function Message(props) {
  const theme = useSelector((state) => state.Config.theme);
  const [messages, setMessages] = useState(messageListData);
  const [searchText, setSearchText] = useState("");
  const renderItem = ({ item }) => {
    return (
      <MessageList
        // onPress={() => {
        //   Navigation.push(props.componentId, {
        //     component: {
        //       name: ChatScreenName,
        //       passProps: item,
        //     },
        //   });
        // }}
        item={item}
      />
    );
  };
  const renderItemForNewMatches = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={() => {
        // //   Navigation.push(props.componentId, {
        // //     component: {
        // //       name: ChatScreenName,
        // //       passProps: item,
        // //     },
        // //   });
        // // }}
        style={styles.matches}
      >
        <Avatar editButton={item.status} source={item.source} uri size={60} />
      </TouchableOpacity>
    );
  };
  const onSearch = (val) => {
    const newData = messageListData.filter((item) => {
      let fullName = item.name;
      const itemData = `
        ${fullName?.toUpperCase()} ${fullName?.toUpperCase()} ${fullName?.toUpperCase()}
        `;
      const textData = val.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setMessages(newData);
  };
  return (
    <ScreenWrapper 
      backgroundImage={false}
      transclucent={true}
    >
      <View
        style={[
          styles.mainViewContainer,
          { backgroundColor: theme.bottomSheetBackground },
        ]}
      >
        <TextField
          containerStyles={[styles.input, { borderColor: theme.color }]}
          textInputStyle={{ borderColor: theme.color }}
          placeholder={"Search"}
          onChange={(val) => {
            setSearchText(val);
            onSearch(val);
          }}
        />
        <View style={{ height: height(15) }}>
          <H1 size={6} color={theme.color}>
            New Matches
          </H1>
          <FlatList
            horizontal
            data={messageListData}
            keyExtractor={(it, index) => String(index)}
            renderItem={renderItemForNewMatches}
            contentContainerStyle={CommonStyles.paddingRight_5}
            ItemSeparatorComponent={() => {
              return <View style={{ marginLeft: width(6) }}></View>;
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <View> */}
        <H1
          textStyles={CommonStyles.paddingVertical}
          size={6}
          color={theme.color}
        >
          Messages
        </H1>
        <FlatList
          data={messages}
          keyExtractor={(it, index) => String(index)}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={CommonStyles.paddingBottom_17}
        />
      </View>
      {/* </View> */}
    </ScreenWrapper>
  );
}
