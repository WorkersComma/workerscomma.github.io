import { createFileRoute } from "@tanstack/react-router";
import { WritePage } from "../features/write/WritePage";

type WriteSearch = {
  type: "default" | "depression" | "anxiety" | "stress";
};

export const Route = createFileRoute("/write")({
  component: RouteComponent,
  validateSearch: (search?: Record<string, unknown>): WriteSearch => {
    const types: WriteSearch["type"][] = [
      "anxiety",
      "default",
      "depression",
      "stress",
    ];
    if (
      !search ||
      typeof search.type !== "string" ||
      !types.includes(search.type as WriteSearch["type"])
    ) {
      return { type: "default" };
    }

    return {
      type: search.type,
    } as WriteSearch;
  },
});

function RouteComponent() {
  return <WritePage />;
}
