import type { FC } from "react";
import { Heading1 } from "../../shared/components/Heading1";
import suitcase from "./assets/suitcase.webp";
import suitcase2x from "./assets/suitcase@2x.webp";

export const HelpPage: FC = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <Heading1>도움 기관 찾기</Heading1>

      <div className="relative max-w-md w-full">
        <ul className="mt-9 flex flex-col gap-4">
          <li className="p-4 flex flex-col bg-white border border-[#EEF0F3] rounded-[10px]">
            <h2 className="font-semibold text-[0.875rem] text-black">
              근로자건강센터
            </h2>
            <p className="font-medium text-[0.875rem] text-[#245768]">
              50인 미만 사업장 근로자 및 개인 사업자
            </p>
            <a
              className="mt-4 flex justify-center items-center self-center w-[84px] h-[28px] rounded-[40px] bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] text-white font-bold text-[0.875rem] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
              href="https://kosha.or.kr/healthcenter/index.do"
              target="_blank"
            >
              바로가기
            </a>
          </li>

          <li className="p-4 flex flex-col bg-white border border-[#EEF0F3] rounded-[10px]">
            <h2 className="font-semibold text-[0.875rem] text-black">
              근로복지넷
            </h2>
            <p className="font-medium text-[0.875rem] text-[#245768]">
              300인 미만 사업장 근로자
            </p>
            <a
              className="mt-4 flex justify-center items-center self-center w-[84px] h-[28px] rounded-[40px] bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] text-white font-bold text-[0.875rem] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
              href="https://welfare.comwel.or.kr/default/index.do"
              target="_blank"
            >
              바로가기
            </a>
          </li>

          <li className="p-4 flex flex-col bg-white border border-[#EEF0F3] rounded-[10px]">
            <h2 className="font-semibold text-[0.875rem] text-black">
              고용복지 플러스센터
            </h2>
            <p className="font-medium text-[0.875rem] text-[#245768]">
              실직자 및 구직자
            </p>
            <a
              className="mt-4 flex justify-center items-center self-center w-[84px] h-[28px] rounded-[40px] bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] text-white font-bold text-[0.875rem] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
              href="https://www.workplus.go.kr/index.do"
              target="_blank"
            >
              바로가기
            </a>
          </li>
        </ul>

        <img
          className="absolute -bottom-[70px] -right-[10px] bg-transparent"
          src={suitcase}
          srcSet={`${suitcase2x} 2x`}
          alt=""
        />
      </div>
    </div>
  );
};
