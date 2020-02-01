import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import StarlinkLaunch from "../../assets/StarlinkLaunch.jpg";
import { NavigationStackProp } from "react-navigation-stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 400,
    height: 600,
    marginBottom: 16
  },
  title: {
    fontSize: 32
  }
});

type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

// TODO make this class inherit from a class (or use interface?)
// that implements the props here

class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={StarlinkLaunch} style={styles.image} />
        <Text style={styles.title}>Welcome to SpaceXpo</Text>
        <Button
          title="Get Info"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

export default Home;
