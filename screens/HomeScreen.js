import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Posts from "../components/Posts/index";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <Posts />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
