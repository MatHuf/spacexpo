import React from "react";
import { Text, SafeAreaView, FlatList, View } from "react-native";
import Button from "../components/StyledButton";
import {
  capsulesNavProps,
  rocketsNavProps,
  landingPadsNavProps
} from "../navigation/navigationProps";
import { listScreenStyles as styles } from "../styles";

const vehicles = [
  {
    id: "capsules",
    name: "Capsules",
    navProps: capsulesNavProps
  },
  {
    id: "rockets",
    name: "Rockets",
    navProps: rocketsNavProps
  },
  {
    id: "landingPads",
    name: "Drone Landing Pads",
    navProps: landingPadsNavProps
  }
];

function vehicleRenderItem({ item }, navigation) {
  return (
    <View>
      <Button
        title={item.name}
        onPress={() => navigation.navigate(`${item.name}`, item.navProps)}
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
