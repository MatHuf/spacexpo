import React from "react";
import { Text, View } from "react-native";
import { listViewStyles as styles } from "../../styles";

export const launchesMap = results => {
  const sections = [
    ...new Set(
      results.launches.map(l => {
        return { title: l.launch_date_utc.slice(0, 4) };
      })
    )
  ];
  sections.forEach(
    section =>
      (section.data = results.launches.filter(
        l => l.launch_date_utc.slice(0, 4) === section.title
      ))
  );
  return {
    launches: sections
  };
};

export const LaunchSectionHeader = ({ section: { title } }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

// Consider making the vehicle and launch locations links to view details on those items
export default function LaunchListItem({ item }) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Launch {item.flight_number}</Text>
        <Text style={styles.subHeaderText}>
          {item.rocket.rocket_name} | {item.launch_site.site_name_long}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>
          {item.details ? item.details : "No description available"}
          {item.details && item.details.slice(-1) === "." ? "" : "."}
        </Text>
      </View>
    </View>
  );
}
