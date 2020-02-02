import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// TODO this screen needs to accept a query prop, a component to render the list items,
// and the key of the object that's returned from the query

const GET_LANDING_PADS = gql`
  {
    landingpads {
      id
      full_name
    }
  }
`;

/* {
    landingpads {
      full_name
      location {
        name
        region
      }
      landing_type
      attempted_landings
      successful_landings
      status
      details
    }
  } */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 32
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});

const PadListItem = listItem => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{listItem.item.item.id}</Text>
      <Text style={styles.title}>{listItem.item.item.full_name}</Text>
    </View>
  );
};

export default function DetailsScreen() {
  // TODO figure out how to work with Jest and this hook
  const { loading, data } = useQuery(GET_LANDING_PADS);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing Pads</Text>
      {loading ? (
        <Text style={styles.title}>Loading ...</Text>
      ) : (
        data && (
          <FlatList
            data={data.landingpads}
            renderItem={landingPad => <PadListItem item={landingPad} />}
            keyExtractor={item => item.id}
          />
        )
      )}
    </SafeAreaView>
  );
}

DetailsScreen.navigationOptions = {
  title: "Details"
};
