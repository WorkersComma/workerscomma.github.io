import type { FC, PropsWithChildren } from "react";

export const Heading1: FC<PropsWithChildren> = (props) => (
  <h1 className="w-[283px] h-[43px] flex justify-center items-center bg-[#245768] text-white font-bold rounded-[40px] text-[1.25rem]">
    {props.children}
  </h1>
);
