import { createFileRoute } from "@tanstack/react-router";
import { HeartDrawerBookMarkPage } from "../../../features/heart-drawer/HeartDrawerBookMarkPage";

export const Route = createFileRoute("/heart-drawer/bookmark/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HeartDrawerBookMarkPage />;
}
