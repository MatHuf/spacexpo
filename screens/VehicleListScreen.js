import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  FlatList,
  View,
  ImageComponent
} from "react-native";
import Button from "../components/StyledButton";
import {
  capsulesNavProps,
  rocketsNavProps,
  landingPadsNavProps
} from "../navigation/navigationProps";
import { vehicleScreenStyles as styles } from "../styles";
import Falcon9Landing from "../assets/images/Falcon9Landing.jpg";

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
      <ImageBackground source={Falcon9Landing} style={styles.imageBackground}>
        <FlatList
          style={styles.list}
          data={vehicles}
          renderItem={item => vehicleRenderItem(item, navigation)}
          keyExtractor={item => `${item.id}`}
          inverted
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
