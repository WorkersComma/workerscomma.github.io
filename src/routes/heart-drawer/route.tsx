import { createFileRoute, Outlet } from "@tanstack/react-router";
import { loader as heartDrawerLoader } from "../../features/heart-drawer/loader";

import { Heading1 } from "../../shared/components/Heading1";

export const Route = createFileRoute("/heart-drawer")({
  loader: heartDrawerLoader,
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-[calc(100vh-var(--header-height))] flex flex-col gap-4 items-center p-4">
      <Heading1>마음 서랍</Heading1>
      <Outlet />
    </div>
  );
}
