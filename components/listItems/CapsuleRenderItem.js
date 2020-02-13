import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function CapsuleRenderItem({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.name}</Text>
        <Text style={styles.subHeaderText}>Crew: {item.crew_capacity}</Text>
        <Text style={styles.subHeaderText}>
          First flight: {item.first_flight}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{item.description}</Text>
      </View>
    </View>
  );
}
