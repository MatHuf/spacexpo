import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  SectionList
} from "react-native";
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

  const resultMap = navigation.getParam("resultMap");
  let results = data;
  if (!loading && typeof resultMap === "function") {
    results = resultMap(data);
  }

  const getListComponent = () => {
    const hasSections = navigation.getParam("hasSections");

    if (hasSections) {
      return (
        <SectionList
          data={results[navigation.getParam("listKey")]}
          renderItem={navigation.getParam("renderItem")}
          renderSectionHeader={navigation.getParam("renderSectionHeader")}
          keyExtractor={item => `${item[`${navigation.getParam("itemKey")}`]}`}
        />
      );
    }
    return (
      <FlatList
        data={results[navigation.getParam("listKey")]}
        renderItem={navigation.getParam("renderItem")}
        keyExtractor={item => `${item[`${navigation.getParam("itemKey")}`]}`}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{navigation.getParam("title")}</Text>
      {loading ? (
        <Text style={styles.title}>Loading ...</Text>
      ) : (
        data && getListComponent()
      )}
    </SafeAreaView>
  );
}
