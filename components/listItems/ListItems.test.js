import React from "react";
import renderer from "react-test-renderer";
import {
  HistoryListItem,
  LaunchListItem,
  CapsuleRenderItem,
  RocketRenderItem,
  ShipRenderItem
} from "./index";

const mockHistoryItem = {
  item: {
    title: "History Title",
    event_date_utc: "2000-01-01",
    details: "History Details"
  }
};

const mockLaunchItem = {
  item: {
    flight_number: "0",
    rocket: {
      rocket_name: "Rocket Name"
    },
    launch_site: {
      site_name_long: "Site Name"
    },
    detail: "Details"
  }
};

const mockCapsuleItem = {
  item: {
    name: "Capsule Name",
    crew_capacity: "2",
    first_flight: "2000-01-01",
    description: "Capsule Description"
  }
};

const mockRocketItem = {
  item: {
    rocket_name: "Rocket Name",
    first_flight: "2000-01-01",
    engines: {
      number: "5",
      type: "Fancy"
    },
    description: "Rocket Description"
  }
};

const mockShipItem = {
  item: {
    ship_id: "Ship Id",
    ship_name: "Ship Name",
    successful_landings: "1",
    attempted_landings: "1"
  }
};

describe("List Items", () => {
  it("<HistoryListItem /> renders correctly", () => {
    const tree = renderer
      .create(React.createElement(() => HistoryListItem(mockHistoryItem)))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("<LaunchListItem /> renders correctly", () => {
    const tree = renderer
      .create(React.createElement(() => LaunchListItem(mockLaunchItem)))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("<CapsuleRenderItem /> renders correctly", () => {
    const tree = renderer
      .create(React.createElement(() => CapsuleRenderItem(mockCapsuleItem)))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("<RocketRenderItem /> renders correctly", () => {
    const tree = renderer
      .create(React.createElement(() => RocketRenderItem(mockRocketItem)))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("<ShipRenderItem /> renders correctly", () => {
    const tree = renderer
      .create(React.createElement(() => ShipRenderItem(mockShipItem)))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
