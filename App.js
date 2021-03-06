import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import VehicleListScreen from "./screens/VehicleListScreen";

// https://www.apollographql.com/docs/react/integrations/react-native/
import { AppRegistry } from "react-native";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

// https://reactnavigation.org/docs/en/hello-react-navigation.html
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://spacexdata.herokuapp.com/graphql"
  }),
  cache: new InMemoryCache()
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    History: ListScreen,
    Vehicles: VehicleListScreen,
    Capsules: ListScreen,
    Rockets: ListScreen,
    "Drone Landing Pads": ListScreen,
    Launches: ListScreen
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default function App(props) {
  return (
    <ApolloProvider client={apolloClient}>
      <AppContainer theme={"dark"} />
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("SpaceXpo", () => App);
