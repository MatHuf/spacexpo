import React from "react";
import { Text, SafeAreaView, FlatList, SectionList } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { listScreenStyles as styles } from "../styles";

export default function ListScreen({ navigation }) {
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
          sections={results[navigation.getParam("listKey")]}
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
