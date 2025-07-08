import { createFileRoute } from "@tanstack/react-router";
import { HelpPage } from "../features/help/HelpPage";

export const Route = createFileRoute("/help")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HelpPage />;
}
