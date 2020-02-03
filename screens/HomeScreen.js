import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";

import { GET_HISTORY } from "../queries";
import HistoryListItem from "../components/listItems/HistoryListItem";

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
        title="Missions"
        onPress={() => props.navigation.navigate("Details")}
      />
      <Button
        title="Vehicles"
        onPress={() => props.navigation.navigate("Vehicles")}
      />
      <Button
        title="History"
        onPress={() =>
          props.navigation.navigate("History", {
            query: GET_HISTORY,
            listKey: "history",
            renderItem: HistoryListItem,
            itemKey: "id"
          })
        }
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false
};
