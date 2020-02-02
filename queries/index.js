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
