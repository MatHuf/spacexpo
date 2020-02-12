import React from "react";
import renderer, { act } from "react-test-renderer";
import { MockedProvider, wait } from "@apollo/react-testing";
import ListScreen from "./ListScreen";
import {
  launchesMock,
  historyMock,
  capsulesMock,
  rocketsMock,
  landingPadsMock
} from "../mocks/apolloMocks";
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
const capsulesNavMock = new NavigationMock(capsulesNavProps);
const rocketsNavMock = new NavigationMock(rocketsNavProps);
const landingPadsNavMock = new NavigationMock(landingPadsNavProps);

describe("ListScreen: Launches", () => {
  it("renders correctly", async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(
        <MockedProvider addTypename={false} mocks={launchesMock}>
          <ListScreen navigation={launchesNavMock} />
        </MockedProvider>
      );
      await wait(0);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
describe("ListScreen: History", () => {
  it("renders correctly", async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(
        <MockedProvider addTypename={false} mocks={historyMock}>
          <ListScreen navigation={historyNavMock} />
        </MockedProvider>
      );
      await wait(0);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
describe("ListScreen: Capsules", () => {
  it("renders correctly", async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(
        <MockedProvider addTypename={false} mocks={capsulesMock}>
          <ListScreen navigation={capsulesNavMock} />
        </MockedProvider>
      );
      await wait(0);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
describe("ListScreen: Rockets", () => {
  it("renders correctly", async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(
        <MockedProvider addTypename={false} mocks={rocketsMock}>
          <ListScreen navigation={rocketsNavMock} />
        </MockedProvider>
      );
      await wait(0);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
describe("ListScreen: Rockets", () => {
  it("renders correctly", async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(
        <MockedProvider addTypename={false} mocks={landingPadsMock}>
          <ListScreen navigation={landingPadsNavMock} />
        </MockedProvider>
      );
      await wait(0);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
