import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

interface LandingPad {
  id: string;
  full_name: number;
}

interface LandingPadData {
  landingpads: LandingPad[];
}

interface LandingPadVars {
  limit: number;
}

const GET_LANDING_PADS = gql`
  {
    landingpads {
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
  }
});

const Detail = props => {
  const { loading, data } = useQuery<LandingPadData, LandingPadVars>(
    GET_LANDING_PADS,
    { variables: { limit: 10 } }
  );

  return (
    <View style={styles.container}>
      <Text>Landing Pads</Text>
      {loading ? (
        <Text style={styles.title}>Loading ...</Text>
      ) : (
        data &&
        data.landingpads.map((pad, i) => (
          <Text key={pad.id} style={styles.title}>
            {pad.full_name}
          </Text>
        ))
      )}
    </View>
  );
};

export default Detail;
