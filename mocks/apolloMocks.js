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

export const historyMock = [
  {
    request: {
      query: queries.GET_HISTORY
    },
    result: {
      data: {
        history: [
          {
            id: 1,
            title: "Falcon 1 Makes History",
            event_date_utc: "2008-09-28T23:15:00Z",
            details:
              "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit."
          },
          {
            id: 2,
            title: "SpaceX Wins $1.6B CRS Contract",
            event_date_utc: "2008-12-23T01:00:00Z",
            details:
              "NASA awards SpaceX $1.6B Commercial Resupply Services (CRS) contract."
          }
        ]
      }
    }
  }
];

export const capsulesMock = [
  {
    request: {
      query: queries.GET_CAPSULES
    },
    result: {
      data: {
        dragons: [
          {
            id: "dragon1",
            name: "Dragon 1",
            crew_capacity: 0,
            first_flight: "2010-12-08",
            description:
              "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS)."
          },
          {
            id: "dragon2",
            name: "Dragon 2",
            crew_capacity: 7,
            first_flight: "2019-03-02",
            description:
              "Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS). In addition, it has much larger windows, new flight computers and avionics, and redesigned solar arrays, and a modified outer mold line from the initial cargo Dragon that has been flying for several years."
          }
        ]
      }
    }
  }
];

export const rocketsMock = [
  {
    request: {
      query: queries.GET_CAPSULES
    },
    result: {
      data: {
        rockets: [
          {
            rocket_id: "falcon1",
            rocket_name: "Falcon 1",
            first_flight: "2006-03-24",
            engines: {
              type: "merlin",
              number: 1
            },
            payload_weights: [
              {
                name: "Low Earth Orbit",
                kg: 450
              }
            ],
            description:
              "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
          },
          {
            rocket_id: "falcon9",
            rocket_name: "Falcon 9",
            first_flight: "2010-06-04",
            engines: {
              type: "merlin",
              number: 9
            },
            payload_weights: [
              {
                name: "Low Earth Orbit",
                kg: 22800
              },
              {
                name: "Geosynchronous Transfer Orbit",
                kg: 8300
              },
              {
                name: "Mars Orbit",
                kg: 4020
              }
            ],
            description:
              "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit."
          }
        ]
      }
    }
  }
];

export const landingPadsMock = [
  {
    request: {
      query: queries.GET_DRONE_BARGES
    },
    result: {
      data: {
        ship0: {
          ship_id: "ASOG",
          ship_name: "A Shortfall of Gravitas",
          attempted_landings: 0,
          successful_landings: 0
        },
        ship1: {
          ship_id: "JRTI-1",
          ship_name: "Just Read The Instructions",
          attempted_landings: 2,
          successful_landings: 0
        },
        ship2: {
          ship_id: "JRTI-2",
          ship_name: "Just Read The Instructions",
          attempted_landings: 8,
          successful_landings: 7
        },
        ship3: {
          ship_id: "OCISLY",
          ship_name: "Of Course I Still Love You",
          attempted_landings: 28,
          successful_landings: 24
        }
      }
    }
  }
];
