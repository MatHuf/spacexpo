import React from "react";
import renderer from "react-test-renderer";

import Home from "./Home";

describe("<Home />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(React.createElement(Home)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
