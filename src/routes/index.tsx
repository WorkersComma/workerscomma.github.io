import { createFileRoute } from "@tanstack/react-router";
import { MainPage } from "../features/main/MainPage";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <MainPage />;
}
