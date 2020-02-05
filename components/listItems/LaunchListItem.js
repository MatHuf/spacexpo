import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

// TODO convert the parent view for this one to use sections and organize by year
// Consider making the vehicle and launch locations links to view details on those items

export default function LaunchListItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Launch {props.item.flight_number}</Text>
        <Text style={styles.subHeaderText}>
          {props.item.rocket.rocket_name} | {props.item.launch_site.site_name}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>
          {props.item.details ? props.item.details : "No description available"}
          {props.item.details && props.item.details.slice(-1) === "."
            ? ""
            : "."}
        </Text>
      </View>
    </View>
  );
}
