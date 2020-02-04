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
  console.log(ship);
  return (
    <View>
      <Text>{ship.item.ship_id}</Text>
      <Text>{ship.item.ship_name}</Text>
      <Text>Successful landings: {ship.item.successful_landings}</Text>
      <Text>Attempted landings: {ship.item.attempted_landings}</Text>
    </View>
  );
}
