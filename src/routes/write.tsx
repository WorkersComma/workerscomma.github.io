import { createFileRoute } from "@tanstack/react-router";
import { WritePage } from "../features/write/WritePage";

export const Route = createFileRoute("/write")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WritePage />;
}
