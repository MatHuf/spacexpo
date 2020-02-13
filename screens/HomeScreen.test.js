import React from "react";
import renderer from "react-test-renderer";

import HomeScreen from "./HomeScreen";

describe("<Home />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(React.createElement(HomeScreen)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
