import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/self-diagnosis/stress/result")({
  component: RouteComponent,
  validateSearch: (
    search?: Record<string, unknown>
  ):
    | {
        gender: "MALE" | "FEMALE";
        t1: number;
        t2: number;
        t3: number;
        t4: number;
        t5: number;
        t6: number;
        t7: number;
        t8: number;
      }
    | undefined => {
    if (!search) return;

    return {
      gender: (search?.gender as "MALE" | "FEMALE") || "MALE",
      t1: Number.isNaN(Number(search?.t1)) ? 0 : Number(search?.t1),
      t2: Number.isNaN(Number(search?.t2)) ? 0 : Number(search?.t2),
      t3: Number.isNaN(Number(search?.t3)) ? 0 : Number(search?.t3),
      t4: Number.isNaN(Number(search?.t4)) ? 0 : Number(search?.t4),
      t5: Number.isNaN(Number(search?.t5)) ? 0 : Number(search?.t5),
      t6: Number.isNaN(Number(search?.t6)) ? 0 : Number(search?.t6),
      t7: Number.isNaN(Number(search?.t7)) ? 0 : Number(search?.t7),
      t8: Number.isNaN(Number(search?.t8)) ? 0 : Number(search?.t8),
    };
  },
});

function RouteComponent() {
  return <div>Hello "/self-diagnosis/stress/result"!</div>;
}
