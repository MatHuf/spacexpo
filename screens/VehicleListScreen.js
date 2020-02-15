import React from "react";
import { Text, SafeAreaView, FlatList, View } from "react-native";
import Button from "../components/StyledButton";
import {
  capsulesNavProps,
  rocketsNavProps,
  landingPadsNavProps
} from "../navigation/navigationProps";
import { vehicleScreenStyles as styles } from "../styles";

const vehicles = [
  {
    id: "landingPads",
    name: "Drone Landing Pads",
    navProps: landingPadsNavProps
  },
  {
    id: "rockets",
    name: "Rockets",
    navProps: rocketsNavProps
  },
  {
    id: "capsules",
    name: "Capsules",
    navProps: capsulesNavProps
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
      <FlatList
        style={styles.list}
        data={vehicles}
        renderItem={item => vehicleRenderItem(item, navigation)}
        keyExtractor={item => `${item.id}`}
        inverted
      />
    </SafeAreaView>
  );
}
