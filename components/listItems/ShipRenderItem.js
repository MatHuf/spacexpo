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

export default function ShipRenderItem(ship) {
  return (
    <View>
      <Text>{ship.item.ship_name}</Text>
      <Text>{ship.item.ship_type}</Text>
    </View>
  );
}
