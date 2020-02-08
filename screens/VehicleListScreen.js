import React from "react";
import { Text, SafeAreaView, FlatList, View, Button } from "react-native";
import { GET_CAPSULES, GET_ROCKETS, GET_DRONE_BARGES } from "../queries";
import {
  CapsuleRenderItem,
  RocketRenderItem,
  ShipRenderItem
} from "../components/listItems";
import { listScreenStyles as styles } from "../styles";

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

function vehicleRenderItem({ item }, navigation) {
  return (
    <View>
      <Button
        title={item.name}
        onPress={() =>
          navigation.navigate(`${item.name}`, {
            query: item.query,
            listKey: item.listKey,
            itemKey: item.itemKey,
            renderItem: item.renderItem,
            resultMap: item.resultMap
          })
        }
      />
    </View>
  );
}

export default function VehicleListScreen({ navigation }) {
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
