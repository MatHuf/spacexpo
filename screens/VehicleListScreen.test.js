import React from "react";
import renderer from "react-test-renderer";

import VehicleListScreen from "./VehicleListScreen";

describe("<VehicleListScreen />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(React.createElement(VehicleListScreen))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
