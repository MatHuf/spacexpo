import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function ShipRenderItem({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {item.ship_id} | {item.ship_name}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>
          Successful landings: {item.successful_landings}/
          {item.attempted_landings}
        </Text>
      </View>
    </View>
  );
}
