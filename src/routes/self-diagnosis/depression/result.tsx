import { createFileRoute } from "@tanstack/react-router";
import { DepressionResultPage } from "../../../features/self-diagnosis/depression/DepressionResultPage";

export const Route = createFileRoute("/self-diagnosis/depression/result")({
  component: RouteComponent,
  validateSearch: (search?: Record<string, unknown>): { score?: number } => {
    return {
      score: search?.score ? Number(search.score) : undefined,
    };
  },
});

function RouteComponent() {
  return <DepressionResultPage />;
}
