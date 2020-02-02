import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";

import { useQuery } from "@apollo/react-hooks";

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

export default function ListScreen(props) {
  const { navigation } = props;

  // TODO figure out how to work with Jest and this hook
  const { loading, data } = useQuery(navigation.getParam("query"));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{navigation.getParam("title")}</Text>
      {loading ? (
        <Text style={styles.title}>Loading ...</Text>
      ) : (
        data && (
          <FlatList
            data={data[navigation.getParam("listKey")]}
            renderItem={navigation.getParam("renderItem")}
            keyExtractor={item => `${item.id}`}
          />
        )
      )}
    </SafeAreaView>
  );
}
