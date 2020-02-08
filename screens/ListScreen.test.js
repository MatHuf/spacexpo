import React from "react";
import renderer from "react-test-renderer";

import ListScreen from "./ListScreen";

describe("<ListScreen />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(React.createElement(ListScreen)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
