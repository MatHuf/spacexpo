import gql from "graphql-tag";

export const GET_HISTORY = gql`
  {
    history(sort: "event_date_utc") {
      id
      title
      event_date_utc
      details
    }
  }
`;

export const GET_ROCKETS = gql`
  {
    rockets {
      rocket_id
      rocket_name
      first_flight
      engines {
        type
        number
      }
      payload_weights {
        name
        kg
      }
      description
    }
  }
`;

export const GET_CAPSULES = gql`
  {
    dragons {
      id
      name
      crew_capacity
      first_flight
      description
    }
  }
`;

export const GET_SHIPS = gql`
  {
    ships {
      ship_id
      ship_name
      ship_type
    }
  }
`;

export const GET_LAUNCHES = gql`
  {
    launches {
      flight_number
      launch_year
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
      details
    }
  }
`;

export const GET_DRONE_BARGES = gql`
  query {
    ship0: ship(id: "ASOG") {
      ship_id
      ship_name
      attempted_landings
      successful_landings
    }
    ship1: ship(id: "JRTI-1") {
      ship_id
      ship_name
      attempted_landings
      successful_landings
    }
    ship2: ship(id: "JRTI-2") {
      ship_id
      ship_name
      attempted_landings
      successful_landings
    }
    ship3: ship(id: "OCISLY") {
      ship_id
      ship_name
      attempted_landings
      successful_landings
    }
  }
`;
