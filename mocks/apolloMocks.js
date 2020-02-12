import * as queries from "../queries";

export const launchesMock = [
  {
    request: {
      query: queries.GET_LAUNCHES
    },
    result: {
      data: {
        launches: [
          {
            flight_number: 1,
            launch_date_utc: "2006-03-24T22:30:00.000Z",
            rocket: {
              rocket_name: "Falcon 1"
            },
            launch_site: {
              site_name_long: "Kwajalein Atoll Omelek Island"
            },
            details: "Engine failure at 33 seconds and loss of vehicle"
          },
          {
            flight_number: 2,
            launch_date_utc: "2007-03-21T01:10:00.000Z",
            rocket: {
              rocket_name: "Falcon 1"
            },
            launch_site: {
              site_name_long: "Kwajalein Atoll Omelek Island"
            },
            details:
              "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
          }
        ]
      }
    }
  }
];
