import React from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import chatRoomData from "../assets/dummy-data/Chats";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/core";

export default function ChatRoomScreen() {
  const route = useRoute();

  const navigation = useNavigation();

  console.warn("Displaying chat room: ", route.params?.id);

  navigation.setOptions({ title: "Elon Musk" });
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
