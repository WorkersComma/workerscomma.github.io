import { createFileRoute } from "@tanstack/react-router";
import { StressTestPage } from "../../../features/self-diagnosis/stress/StressTestPage";

export const Route = createFileRoute("/self-diagnosis/stress/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <StressTestPage />
    </div>
  );
}
