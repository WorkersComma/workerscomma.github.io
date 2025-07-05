import { createFileRoute } from "@tanstack/react-router";
import { SelfDiagnosisIndexPage } from "../../features/self-diagnosis/SelfDiagnosisIndexPage";

export const Route = createFileRoute("/self-diagnosis/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SelfDiagnosisIndexPage />;
}
