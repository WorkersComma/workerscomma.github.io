import type { FC } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { Heading1 } from "../../../shared/components/Heading1";
import greenTherometer from "../assets/thermometers/green-thermometer.webp";
import greenTherometer2x from "../assets/thermometers/green-thermometer@2x.webp";
import yellowTherometer from "../assets/thermometers/yellow-thermometer.webp";
import yellowTherometer2x from "../assets/thermometers/yellow-thermometer@2x.webp";
import orangeTherometer from "../assets/thermometers/orange-thermometer.webp";
import orangeTherometer2x from "../assets/thermometers/orange-thermometer@2x.webp";
import darkRedTherometer from "../assets/thermometers/dark-red-thermometer.webp";
import darkRedTherometer2x from "../assets/thermometers/dark-red-thermometer@2x.webp";

export const AnxietyResultPage: FC = () => {
  const { score = 0 } = useSearch({ from: "/self-diagnosis/anxiety/result" });

  const therometerImages = (() => {
    if (score < 5)
      return { src: greenTherometer, srcSet: `${greenTherometer2x} 2x` };

    if (score < 10)
      return { src: yellowTherometer, srcSet: `${yellowTherometer2x} 2x` };

    if (score < 15)
      return { src: orangeTherometer, srcSet: `${orangeTherometer2x} 2x` };

    return { src: darkRedTherometer, srcSet: `${darkRedTherometer2x} 2x` };
  })();

  const scoreDescription = (() => {
    if (score < 5) return <span className="text-[#83B583]">0~4점 정상</span>;

    if (score < 10)
      return <span className="text-[#EDBA44]">5~9점 경미한 수준</span>;

    if (score < 15)
      return <span className="text-[#E89C5F]">10~14점 중간 수준</span>;

    return <span className="text-[#A84945]">15~21점 심한 수준</span>;
  })();

  const heading2 = (() => {
    if (score < 5) return "안정감이 업무 집중력에도\n큰 힘이 됩니다!";

    if (score < 10)
      return "사소한 걱정이나 불안이\n마음속을 스치고 지나갈 수 있습니다";

    if (score < 15)
      return "불안이 두근거림이나 가슴 답답함같은\n신체 증상으로 나타날 수 있습니다";

    return "최근 불안이 삶과 업무에\n큰 영향을 주고 있습니다";
  })();

  const paragraph = (() => {
    if (score < 5)
      return "안정된 마음이야말로 집중력과 효율성의 원천이며,\n지금의 당신은 그 좋은 흐름 속에 있습니다.\n스스로를 아낌없이 칭찬해 주세요.";

    if (score < 10)
      return "그럴 땐 업무 중에 잠시 자리에서 일어나\n천천히 심호흡을 해보세요.\n아주 간단한 행동만으로도 마음이 훨씬 가벼워질 수 있습니다.";

    if (score < 15)
      return "잠시 조용한 공간에서 눈을 감고\n깊은 호흡을 5회 반복해보세요.\n단순하지만 매우 효과적인 방법입니다.";

    return "지금은 무엇보다도 당신 자신의 마음을 가장 우선으로\n돌보아야 할 때입니다.\n몸보다 마음의 건강이 더 중요합니다.";
  })();

  return (
    <div className="flex flex-col items-center p-4">
      <Heading1>귀하의 불안감은..</Heading1>

      <div className="mt-4">
        <img className="w-[263px] h-[207px]" {...therometerImages} />
      </div>

      <p className="font-semibold">{scoreDescription}</p>

      <h2 className="mt-2 font-semibold text-[1.125rem] text-black text-center whitespace-pre-line">
        {heading2}
      </h2>

      <p className="mt-1 font-semibold text-[0.875rem] text-center whitespace-pre-line">
        {paragraph}
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          className="w-[161px] h-[35px] flex justify-center items-center font-bold text-[1.125rem] text-white bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] rounded-[40px] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          to="/self-diagnosis/anxiety/help"
        >
          도움 기관 찾기
        </Link>
        <Link
          className="w-[161px] h-[35px] flex justify-center items-center font-bold text-[1.125rem] text-white bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] rounded-[40px] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          to="/self-diagnosis/anxiety/write"
        >
          마음 필사
        </Link>
      </div>
    </div>
  );
};
