import React from "react";
import renderer from "react-test-renderer";

import Details from "./Detail";

describe("<Details />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(React.createElement(Details)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
