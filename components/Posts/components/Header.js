import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Post Header</Text>
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
