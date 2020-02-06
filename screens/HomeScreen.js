import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { GET_HISTORY, GET_LAUNCHES } from "../queries";
import { HistoryListItem, LaunchListItem } from "../components/listItems";
import StarlinkLaunch from "../assets/images/StarlinkLaunch.jpg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 400,
    height: 600,
    marginBottom: 16
  },
  title: {
    fontSize: 32
  }
});

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={StarlinkLaunch} style={styles.image} />
      <Text style={styles.title}>Welcome to SpaceXpo</Text>
      <Button
        title="Launches"
        onPress={() =>
          props.navigation.navigate("Launches", {
            query: GET_LAUNCHES,
            listKey: "launches",
            renderItem: LaunchListItem,
            itemKey: "flight_number",
            hasSections: true,
            renderSectionHeader: ({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            ),
            resultMap: results => {
              const sections = [
                ...new Set(
                  results.launches.map(l => {
                    console.log(l);
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
            }
          })
        }
      />
      <Button
        title="Vehicles"
        onPress={() => props.navigation.navigate("Vehicles")}
      />
      <Button
        title="History"
        onPress={() =>
          props.navigation.navigate("History", {
            query: GET_HISTORY,
            listKey: "history",
            renderItem: HistoryListItem,
            itemKey: "id"
          })
        }
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false
};
