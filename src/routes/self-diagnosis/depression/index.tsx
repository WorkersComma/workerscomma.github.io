import { createFileRoute } from "@tanstack/react-router";
import { DepressionTestPage } from "../../../features/self-diagnosis/depression/DepressionTestPage";

export const Route = createFileRoute("/self-diagnosis/depression/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <DepressionTestPage />
    </div>
  );
}
