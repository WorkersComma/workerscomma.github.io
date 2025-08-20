import { createFileRoute } from "@tanstack/react-router";
import { HeartDrawerPage } from "../../features/heart-drawer/HeartDrawerPage";

export const Route = createFileRoute("/heart-drawer/")({
  component: RouteComponent,
  validateSearch: (search) => {
    if (typeof search.date !== "string") {
      return {};
    }

    const [year, month, date] = search.date
      .split("-")
      .map((v) => parseInt(v, 10));

    if ([year, month, date].some(Number.isNaN)) {
      return {};
    }

    return {
      date: `${year}-${month.toString().padStart(2, "0")}-${date
        .toString()
        .padStart(2, "0")}`,
    };
  },
});

function RouteComponent() {
  return <HeartDrawerPage />;
}
