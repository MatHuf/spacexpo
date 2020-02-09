import React from "react";
import renderer from "react-test-renderer";
import ListScreen from "./ListScreen";
import NavigationMock from "../mocks/navigationMock";
import {
  launchesNavProps,
  historyNavProps,
  capsulesNavProps,
  rocketsNavProps,
  landingPadsNavProps
} from "../navigation/navigationProps";

const launchesNavMock = new NavigationMock(launchesNavProps);
const historyNavMock = new NavigationMock(historyNavProps);

describe("ListScreen: Launches", () => {
  it("renders correctly", () => {
    const tree = renderer.create(() => ListScreen(launchesNavMock)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("ListScreen: History", () => {
  it("renders correctly", () => {
    const tree = renderer.create(() => ListScreen(historyNavMock)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("ListScreen: Capsules", () => {
  it("renders correctly", () => {
    const tree = renderer.create(() => ListScreen(capsulesNavProps)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("ListScreen: Rockets", () => {
  it("renders correctly", () => {
    const tree = renderer.create(() => ListScreen(rocketsNavProps)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("ListScreen: Landing Pads", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(() => ListScreen(landingPadsNavProps))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
