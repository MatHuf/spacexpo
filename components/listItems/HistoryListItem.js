import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export default function HistoryListItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{props.item.title}</Text>

        <Text style={styles.subHeaderText}>{props.item.event_date_utc}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>{props.item.details}</Text>
      </View>
    </View>
  );
}
