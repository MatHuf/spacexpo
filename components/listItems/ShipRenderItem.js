import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function ShipRenderItem(ship) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {ship.item.ship_id} | {ship.item.ship_name}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>
          Successful landings: {ship.item.successful_landings}/
          {ship.item.attempted_landings}
        </Text>
      </View>
    </View>
  );
}
