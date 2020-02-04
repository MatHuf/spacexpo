import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});

export default function RocketRenderItem(rocket) {
  return (
    <View>
      <Text>{rocket.item.rocket_name}</Text>
      <Text>First flight: {rocket.item.first_flight}</Text>
      <Text>
        Engines: {rocket.item.engines.number}x {rocket.item.engines.type}
      </Text>
      <Text>{rocket.item.description}</Text>
    </View>
  );
}
