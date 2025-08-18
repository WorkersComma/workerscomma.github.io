import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../shared/components/Header";
import { queryClient } from "../shared/queryClient";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();

    const bgColor =
      location.pathname.includes("result") ||
      location.pathname.includes("help") ||
      location.pathname.includes("heart-drawer/calendar")
        ? "bg-[#FDFEEA]"
        : "bg-[#EDF4FF]";

    return (
      <QueryClientProvider client={queryClient}>
        <Header />
        <section
          className={"min-h-[calc(100vh-var(--header-height))] " + bgColor}
        >
          <Outlet />
        </section>
        <TanStackRouterDevtools />
      </QueryClientProvider>
    );
  },
});
