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

function CapsuleRenderItem(capsule) {
  return (
    <View>
      <Text>{capsule.item.name}</Text>
    </View>
  );
}
function RocketRenderItem(rocket) {
  return (
    <View>
      <Text>{rocket.item.rocket_name}</Text>
    </View>
  );
}
function ShipRenderItem(ship) {
  return (
    <View>
      <Text>{ship.item.ship_name}</Text>
      <Text>{ship.item.ship_type}</Text>
    </View>
  );
}

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

function vehicleRenderItem(vehicle, navigation) {
  console.log(navigation);
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
