import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../shared/components/Header";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();

    const bgColor =
      location.pathname.includes("result") ||
      location.pathname.includes("help") ||
      location.pathname.includes("write")
        ? "bg-[#FDFEEA]"
        : "bg-[#EDF4FF]";

    return (
      <>
        <Header />
        <section
          className={"min-h-[calc(100vh-var(--header-height))] " + bgColor}
        >
          <Outlet />
        </section>
        <TanStackRouterDevtools />
      </>
    );
  },
});
