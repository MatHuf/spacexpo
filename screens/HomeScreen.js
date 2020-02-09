import React from "react";
import { Image, Text, View, Button } from "react-native";
import { homeScreenStyles as styles } from "../styles";
import {
  launchesNavProps,
  historyNavProps
} from "../navigation/navigationProps";
import StarlinkLaunch from "../assets/images/StarlinkLaunch.jpg";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={StarlinkLaunch} style={styles.image} />
      <Text style={styles.title}>Welcome to SpaceXpo</Text>
      <Button
        title="Launches"
        onPress={() => navigation.navigate("Launches", launchesNavProps)}
      />
      <Button
        title="Vehicles"
        onPress={() => navigation.navigate("Vehicles")}
      />
      <Button
        title="History"
        onPress={() => navigation.navigate("History", historyNavProps)}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false
};
