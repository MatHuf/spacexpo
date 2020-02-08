import React from "react";
import { Image, Text, View, Button } from "react-native";
import { GET_HISTORY, GET_LAUNCHES } from "../queries";
import { HistoryListItem, LaunchListItem } from "../components/listItems";
import {
  launchesMap,
  LaunchSectionHeader
} from "../components/listItems/LaunchListItem";
import { homeScreenStyles as styles } from "../styles";
import StarlinkLaunch from "../assets/images/StarlinkLaunch.jpg";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={StarlinkLaunch} style={styles.image} />
      <Text style={styles.title}>Welcome to SpaceXpo</Text>
      <Button
        title="Launches"
        onPress={() =>
          navigation.navigate("Launches", {
            query: GET_LAUNCHES,
            listKey: "launches",
            renderItem: LaunchListItem,
            itemKey: "flight_number",
            hasSections: true,
            renderSectionHeader: LaunchSectionHeader,
            resultMap: result => launchesMap(result)
          })
        }
      />
      <Button
        title="Vehicles"
        onPress={() => navigation.navigate("Vehicles")}
      />
      <Button
        title="History"
        onPress={() =>
          navigation.navigate("History", {
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
