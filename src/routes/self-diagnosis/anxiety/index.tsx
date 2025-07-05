import { createFileRoute } from "@tanstack/react-router";
import { AnxietyTestPage } from "../../../features/self-diagnosis/anxiety/AnxietyTestPage";

export const Route = createFileRoute("/self-diagnosis/anxiety/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AnxietyTestPage />
    </div>
  );
}
