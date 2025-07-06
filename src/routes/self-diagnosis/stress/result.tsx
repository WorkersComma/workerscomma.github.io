import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/self-diagnosis/stress/result")({
  component: RouteComponent,
  validateSearch: (search?: Record<string, unknown>): { score?: number } => {
    return {
      score: search?.score ? Number(search.score) : undefined,
    };
  },
});

function RouteComponent() {
  return <div>Hello "/self-diagnosis/stress/result"!</div>;
}
