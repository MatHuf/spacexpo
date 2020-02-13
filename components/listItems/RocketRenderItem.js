import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function RocketRenderItem({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.rocket_name}</Text>
        <Text style={styles.subHeaderText}>
          First flight: {item.first_flight}
        </Text>
        <Text style={styles.subHeaderText}>
          Engines: {item.engines.number}x {item.engines.type}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{item.description}</Text>
      </View>
    </View>
  );
}
