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

export default function CapsuleRenderItem(capsule) {
  return (
    <View>
      <Text>{capsule.item.name}</Text>
      <Text>Crew: {capsule.item.crew_capacity}</Text>
      <Text>First flight: {capsule.item.first_flight}</Text>
      <Text>{capsule.item.description}</Text>
    </View>
  );
}
