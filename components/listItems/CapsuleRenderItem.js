import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function CapsuleRenderItem(capsule) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{capsule.item.name}</Text>
        <Text style={styles.subHeaderText}>
          Crew: {capsule.item.crew_capacity}
        </Text>
        <Text style={styles.subHeaderText}>
          First flight: {capsule.item.first_flight}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{capsule.item.description}</Text>
      </View>
    </View>
  );
}
