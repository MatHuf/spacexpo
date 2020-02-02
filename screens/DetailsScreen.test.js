import React from "react";
import renderer from "react-test-renderer";

import DetailsScreen from "./DetailsScreen";

describe("<Details />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(React.createElement(DetailsScreen)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
