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
    }
  }
`;

export const GET_CAPSULES = gql`
  {
    dragons {
      id
      name
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
