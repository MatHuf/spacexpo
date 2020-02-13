import React from "react";
import renderer from "react-test-renderer";

import Button from "./StyledButton";

const props = {
  title: "Press Here",
  onPress: () => {}
};

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(React.createElement(() => Button(props)))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
