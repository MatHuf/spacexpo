import React from "react";
import renderer, { act } from "react-test-renderer";
import { MockedProvider, wait } from "@apollo/react-testing";
import ListScreen from "./ListScreen";
import { launchesMock } from "../mocks/apolloMocks";
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
// describe("ListScreen: History", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(<ListScreen navigation={historyNavMock} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
// describe("ListScreen: Capsules", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(() => <ListScreen navigation={capsulesNavMock} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
// describe("ListScreen: Rockets", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(() => <ListScreen navigation={rocketsNavMock} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
// describe("ListScreen: Landing Pads", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(() => <ListScreen navigation={landingPadsNavMock} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
