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

export const DepressionResultPage: FC = () => {
  const { score = 0 } = useSearch({
    from: "/self-diagnosis/depression/result",
  });

  const therometerImages = (() => {
    if (score < 5)
      return { src: greenTherometer, srcSet: `${greenTherometer2x} 2x` };

    if (score < 10)
      return { src: yellowTherometer, srcSet: `${yellowTherometer2x} 2x` };

    if (score < 15)
      return { src: orangeTherometer, srcSet: `${orangeTherometer2x} 2x` };

    if (score < 20)
      return { src: redTherometer, srcSet: `${redTherometer2x} 2x` };

    return { src: darkRedTherometer, srcSet: `${darkRedTherometer2x} 2x` };
  })();

  const scoreDescription = (() => {
    if (score < 5)
      return <span className="text-[#83B583]">0~4점 최소 우울</span>;

    if (score < 10)
      return <span className="text-[#EDBA44]">5~9점 경증 우울</span>;

    if (score < 15)
      return <span className="text-[#E89C5F]">10~14점 중등도 우울</span>;

    if (score < 20)
      return <span className="text-[#D35954]">15~19점 중등-중증 우울</span>;

    return <span className="text-[#A84945]">20~27점 중증 우울</span>;
  })();

  const heading2 = (() => {
    if (score < 5) return "일과 삶의 균형을 잘 유지하고 계시네요";

    if (score < 10) return "조금 지치셨군요";

    if (score < 15) return "지금은 충분한 휴식과\n따뜻한 관심이 필요할 때";

    if (score < 20) return "업무보다 마음건강을\n우선으로 챙겨주세요";

    return "꼭 쉬어야 해요";
  })();

  const paragraph = (() => {
    if (score < 5)
      return "오늘도 마음이 건강한 상태입니다!\n지금처럼 꾸준히 자신을 돌보세요.\n일터에서도 마음의 여유를 잃지 않고 계셔서 멋져요.\n나를 아끼는 태도가 곧 건강한 직장생활로 이어집니다.";

    if (score < 10)
      return "최근 업무나 일상에서 조금 피로가 쌓였을 수 있습니다.\n스트레칭, 산책 같은 작은 휴식과 더불어 동료와의 대화가\n마음의 부담을 덜어줄 수 있어요. 일이 많을 땐  우선순위를 정해\n하나씩 처리하고, 퇴근 후엔 충분히 쉬어주세요.";

    if (score < 15)
      return "반복되는 업무 스트레스가 우울감으로 이어질 수 있습니다.\n스스로를 돌볼 시간이 필요해요. 퇴근 후에는 휴대폰을 잠시 멀리 두고\n휴식에  집중해보세요. 가족, 친구에게 털어놓고 도움을 받아보세요.";

    if (score < 20)
      return "현재 마음의 무게가 상당히 크신 것으로 보입니다.\n업무 부담을 혼자 안고 계시지 않은지 돌아보고,\n직장 내 상담창구나 전문가의 도움을 꼭 받아보세요.";

    return "높은 스트레스와 우울은 일에도 큰 영향을 미칠 수 있습니다.\n지금은 쉬어갈 때입니다. 병원 상담과 함께 필요한 경우 병가도\n고려해보세요. 위급 상황일 경우 즉시 119 또는\n정신건강 위기상담 전화(1577-0199)에 연락하세요.";
  })();

  return (
    <div className="flex flex-col items-center p-4">
      <Heading1>귀하의 우울감은..</Heading1>

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
          to="/self-diagnosis/depression/help"
        >
          도움 기관 찾기
        </Link>
        <Link
          className="w-[161px] h-[35px] flex justify-center items-center font-bold text-[1.125rem] text-white bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] rounded-[40px] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          to="/self-diagnosis/depression/write"
        >
          마음 필사
        </Link>
      </div>
    </div>
  );
};
