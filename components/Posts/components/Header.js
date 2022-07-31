import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "@rneui/base";

const Header = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.profile_picture }} />
      <Text style={{ color: "white" }}>Post Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 20,
    paddingHorizontal: 10,
  },
});
