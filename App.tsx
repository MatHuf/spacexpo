import React, { Component } from "react";
import Home from "./src/views/Home";
import Details from "./src/views/Detail";

// https://reactnavigation.org/docs/en/hello-react-navigation.html
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

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
    return <AppContainer />;
  }
}
