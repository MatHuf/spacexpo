import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

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

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Details here...</Text>
      </View>
    );
  }
}

export default Detail;
