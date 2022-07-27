import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Posts = () => {
  return (
    <View style={{ width: "100%" }}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
