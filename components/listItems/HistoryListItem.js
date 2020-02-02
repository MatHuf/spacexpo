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

// TODO figure out why these are so nested

export default function HistoryListItem(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.title}>{props.item.event_date_utc}</Text>
      <Text style={styles.title}>{props.item.details}</Text>
    </View>
  );
}
