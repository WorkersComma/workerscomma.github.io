import { createFileRoute } from "@tanstack/react-router";
import { AnxietyResultPage } from "../../../features/self-diagnosis/anxiety/AnxietyResultPage";

export const Route = createFileRoute("/self-diagnosis/anxiety/result")({
  component: RouteComponent,
  validateSearch: (search?: Record<string, unknown>): { score?: number } => {
    return {
      score: search?.score ? Number(search.score) : undefined,
    };
  },
});

function RouteComponent() {
  return <AnxietyResultPage />;
}
