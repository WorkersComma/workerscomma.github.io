import type { FC } from "react";
import { useHeartDrawers } from "./hooks/useHeartDrawer";

export const HeartDrawerBookMarkPage: FC = () => {
  const heartDrawers = useHeartDrawers();

  return <div></div>;
};
