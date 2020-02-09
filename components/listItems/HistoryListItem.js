import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function HistoryListItem({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.title}</Text>

        <Text style={styles.subHeaderText}>{item.event_date_utc}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{item.details}</Text>
      </View>
    </View>
  );
}
