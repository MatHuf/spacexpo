import React, { Component } from "react";
import Home from "./src/views/Home";
import Details from "./src/views/Detail";

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
    Home: Home,
    Details: Details
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);

// TODO figure out why testing with Jest fails for this class
// Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent("SpaceXpo", () => App);
