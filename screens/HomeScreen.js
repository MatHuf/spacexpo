import React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import Button from "../components/StyledButton";
import { homeScreenStyles as styles } from "../styles";
import {
  launchesNavProps,
  historyNavProps
} from "../navigation/navigationProps";
import StarlinkLaunch from "../assets/images/StarlinkLaunch.jpg";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>SpaceXpo</Text>
      </View>
      <Image source={StarlinkLaunch} style={styles.image} />

      <View style={styles.buttonContainer}>
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
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false
};
