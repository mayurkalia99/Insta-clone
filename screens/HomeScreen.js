import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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