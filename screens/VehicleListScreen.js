import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Button
} from "react-native";
import { GET_CAPSULES, GET_ROCKETS, GET_SHIPS } from "../queries";
import {
  CapsuleRenderItem,
  RocketRenderItem,
  ShipRenderItem
} from "../components/listItems";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 32
  }
});

const vehicles = [
  {
    id: "capsules",
    name: "Capsules",
    query: GET_CAPSULES,
    listKey: "dragons",
    itemKey: "id",
    renderItem: CapsuleRenderItem
  },
  {
    id: "rockets",
    name: "Rockets",
    query: GET_ROCKETS,
    listKey: "rockets",
    itemKey: "rocket_id",
    renderItem: RocketRenderItem
  },
  //   {
  //     id: "landingPads",
  //     name: "Landing Pads"
  //   },
  {
    id: "ships",
    name: "Ships",
    query: GET_SHIPS,
    listKey: "ships",
    itemKey: "ship_id",
    renderItem: ShipRenderItem
  }
];

// TODO figure out how to handle results from the GET_DRONE_BARGES query
// where there are different keys for each result

function vehicleRenderItem(vehicle, navigation) {
  return (
    <View>
      <Button
        title={vehicle.item.name}
        onPress={() =>
          navigation.navigate(`${vehicle.item.name}`, {
            query: vehicle.item.query,
            listKey: vehicle.item.listKey,
            itemKey: vehicle.item.itemKey,
            renderItem: vehicle.item.renderItem
          })
        }
      />
    </View>
  );
}

export default function VehicleListScreen(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Vehicles</Text>
      <FlatList
        data={vehicles}
        renderItem={item => vehicleRenderItem(item, navigation)}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
}
