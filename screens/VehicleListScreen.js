import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Button
} from "react-native";
import { GET_CAPSULES, GET_ROCKETS, GET_DRONE_BARGES } from "../queries";
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
  {
    id: "landingPads",
    name: "Drone Landing Pads",
    query: GET_DRONE_BARGES,
    listKey: "dronebarges",
    itemKey: "ship_id",
    renderItem: ShipRenderItem,
    resultMap: result => {
      return {
        dronebarges: Object.keys(result).map(k => result[k])
      };
    }
  }
];

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
            renderItem: vehicle.item.renderItem,
            resultMap: vehicle.item.resultMap
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
