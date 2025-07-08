import type { FC } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { Heading1 } from "../../../shared/components/Heading1";
import greenTherometer from "../assets/thermometers/green-thermometer.webp";
import greenTherometer2x from "../assets/thermometers/green-thermometer@2x.webp";
import yellowTherometer from "../assets/thermometers/yellow-thermometer.webp";
import yellowTherometer2x from "../assets/thermometers/yellow-thermometer@2x.webp";
import orangeTherometer from "../assets/thermometers/orange-thermometer.webp";
import orangeTherometer2x from "../assets/thermometers/orange-thermometer@2x.webp";
import redTherometer from "../assets/thermometers/red-thermometer.webp";
import redTherometer2x from "../assets/thermometers/red-thermometer@2x.webp";
import darkRedTherometer from "../assets/thermometers/dark-red-thermometer.webp";
import darkRedTherometer2x from "../assets/thermometers/dark-red-thermometer@2x.webp";
import resultSet from "./result-set.json";

export const DepressionResultPage: FC = () => {
  const { score = 0 } = useSearch({
    from: "/self-diagnosis/depression/result",
  });

  const status = ((): "green" | "yellow" | "orange" | "red" | "darkRed" => {
    if (score < 5) return "green";
    if (score < 10) return "yellow";
    if (score < 15) return "orange";
    if (score < 20) return "red";
    return "darkRed";
  })();

  const therometerImages = (() => {
    if (status === "green")
      return { src: greenTherometer, srcSet: `${greenTherometer2x} 2x` };

    if (status === "yellow")
      return { src: yellowTherometer, srcSet: `${yellowTherometer2x} 2x` };

    if (status === "orange")
      return { src: orangeTherometer, srcSet: `${orangeTherometer2x} 2x` };

    if (status === "red")
      return { src: redTherometer, srcSet: `${redTherometer2x} 2x` };

    return { src: darkRedTherometer, srcSet: `${darkRedTherometer2x} 2x` };
  })();

  const scoreDescription = (() => {
    if (status === "green")
      return <span className="text-[#83B583]">0~4점 최소 우울</span>;

    if (status === "yellow")
      return <span className="text-[#EDBA44]">5~9점 경증 우울</span>;

    if (status === "orange")
      return <span className="text-[#E89C5F]">10~14점 중등도 우울</span>;

    if (status === "red")
      return <span className="text-[#D35954]">15~19점 중등-중증 우울</span>;

    return <span className="text-[#A84945]">20~27점 중증 우울</span>;
  })();

  const heading2 = (() => {
    const heading =
      resultSet[status].headings[
        Math.floor(Math.random() * resultSet[status].headings.length)
      ];
    return heading;
  })();

  const paragraph = (() => {
    const description =
      resultSet[status].descriptions[
        Math.floor(Math.random() * resultSet[status].descriptions.length)
      ];
    return description;
  })();

  return (
    <div className="flex flex-col items-center p-4">
      <Heading1>귀하의 우울감은..</Heading1>

      <div className="mt-4">
        <img className="w-[263px] h-[207px]" {...therometerImages} />
      </div>

      <p className="font-semibold">{scoreDescription}</p>

      <h2 className="mt-2 font-semibold text-[1.125rem] text-black text-center whitespace-pre-line break-keep">
        {heading2}
      </h2>

      <p className="mt-1 font-semibold text-[0.875rem] text-center whitespace-pre-line break-keep max-w-xs">
        {paragraph}
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          className="w-[161px] h-[35px] flex justify-center items-center font-bold text-[1.125rem] text-white bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] rounded-[40px] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          to="/help"
        >
          도움 기관 찾기
        </Link>
        <Link
          className="w-[161px] h-[35px] flex justify-center items-center font-bold text-[1.125rem] text-white bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] rounded-[40px] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          to="/write"
        >
          마음 필사
        </Link>
      </div>
    </div>
  );
};
