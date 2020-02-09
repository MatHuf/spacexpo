import {
  launchesMap,
  LaunchSectionHeader
} from "../components/listItems/LaunchListItem";
import {
  GET_HISTORY,
  GET_LAUNCHES,
  GET_CAPSULES,
  GET_ROCKETS,
  GET_DRONE_BARGES
} from "../queries";
import {
  HistoryListItem,
  LaunchListItem,
  CapsuleRenderItem,
  RocketRenderItem,
  ShipRenderItem
} from "../components/listItems";

export const launchesNavProps = {
  query: GET_LAUNCHES,
  listKey: "launches",
  renderItem: LaunchListItem,
  itemKey: "flight_number",
  hasSections: true,
  renderSectionHeader: LaunchSectionHeader,
  resultMap: result => launchesMap(result)
};

export const historyNavProps = {
  query: GET_HISTORY,
  listKey: "history",
  renderItem: HistoryListItem,
  itemKey: "id"
};

export const capsulesNavProps = {
  query: GET_CAPSULES,
  listKey: "dragons",
  itemKey: "id",
  renderItem: CapsuleRenderItem
};

export const rocketsNavProps = {
  query: GET_ROCKETS,
  listKey: "rockets",
  itemKey: "rocket_id",
  renderItem: RocketRenderItem
};

export const landingPadsNavProps = {
  query: GET_DRONE_BARGES,
  listKey: "dronebarges",
  itemKey: "ship_id",
  renderItem: ShipRenderItem,
  resultMap: result => {
    return {
      dronebarges: Object.keys(result).map(k => result[k])
    };
  }
};
