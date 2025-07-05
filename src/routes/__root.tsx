import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../shared/components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <section className="bg-[#EDF4FF] h-[calc(100vh-var(--header-height))]">
        <Outlet />
      </section>
      <TanStackRouterDevtools />
    </>
  ),
});
