import { getRouteApi } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { getHeartDrawers } from "../service";

export const useHeartDrawers = () => {
  const routeApi = getRouteApi("/heart-drawer");
  const data = routeApi.useLoaderData();
  return useLiveQuery(() => getHeartDrawers(), [data], data);
};
