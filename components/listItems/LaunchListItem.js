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

export default function LaunchListItem(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Launch {props.item.flight_number}</Text>
      <Text style={styles.title}>{props.item.launch_year}</Text>
      <Text style={styles.title}>{props.item.rocket.rocket_name}</Text>
      <Text style={styles.title}>{props.item.launch_site.site_name}</Text>
      <Text style={styles.title}>{props.item.details}</Text>
    </View>
  );
}
