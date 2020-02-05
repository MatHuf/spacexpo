import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function RocketRenderItem(rocket) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{rocket.item.rocket_name}</Text>
        <Text style={styles.subHeaderText}>
          First flight: {rocket.item.first_flight}
        </Text>
        <Text style={styles.subHeaderText}>
          Engines: {rocket.item.engines.number}x {rocket.item.engines.type}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{rocket.item.description}</Text>
      </View>
    </View>
  );
}
