import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";

import StarlinkLaunch from "../assets/images/StarlinkLaunch.jpg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 400,
    height: 600,
    marginBottom: 16
  },
  title: {
    fontSize: 32
  }
});

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={StarlinkLaunch} style={styles.image} />
      <Text style={styles.title}>Welcome to SpaceXpo</Text>
      <Button
        title="Get Info"
        onPress={() => props.navigation.navigate("Details")}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false
};
