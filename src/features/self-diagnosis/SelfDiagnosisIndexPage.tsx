import type { FC } from "react";
import { Link } from "@tanstack/react-router";
import anxiety from "./assets/anxiety.webp";
import anxiety2x from "./assets/anxiety@2x.webp";
import depression from "./assets/depression.webp";
import depression2x from "./assets/depression@2x.webp";
import stress from "./assets/stress.webp";
import stress2x from "./assets/stress@2x.webp";

export const SelfDiagnosisIndexPage: FC = () => {
  return (
    <div className="flex flex-col items-center p-5 **:leading-5">
      <h1 className="w-[283px] h-[43px] flex justify-center items-center bg-[#245768] text-white font-bold rounded-[40px] text-[1.25rem]">
        정신건강 자가진단 테스트
      </h1>

      <h2 className="font-medium mt-4">
        업무를 잠깐 멈추고, 나의 마음을 살펴보세요.
      </h2>

      <p className="mt-2.5 font-semibold text-[0.875rem] text-center">
        <span className="text-[#245768]">
          워커스콤마의 자가진단은 바쁜 일상 속에서 혹시 모르게
          <br />
          쌓인 우울감, 불안감, 직무 스트레스를
          <br />
          간단히 점검할 수 있도록 돕습니다.
        </span>

        <br />
        <br />

        <span className="text-[#65A595]">
          몇 가지 질문에 답하면서 지금의 마음 상태를 알아보고,
          <br />
          나에게 필요한 쉼표(,)를 찾아보세요.
        </span>
      </p>

      <h2 className="mt-2 font-medium">다음 3가지의 척도 중 선택하세요.</h2>

      <ul className="*:flex *:gap-[22px] *:justify-between *:items-center">
        <li>
          <img
            src={depression}
            srcSet={`${depression2x} 2x`}
            alt="우울 이모지"
          />

          <Link
            className="w-[103px] h-[40px] flex justify-center items-center bg-[#65A595] rounded-[40px] font-bold text-[1.125rem] text-white"
            to="/self-diagnosis/depression"
          >
            우울감
          </Link>
        </li>

        <li>
          <img src={anxiety} srcSet={`${anxiety2x} 2x`} alt="불안감 이모지" />

          <Link
            className="w-[103px] h-[40px] flex justify-center items-center bg-[#65A595] rounded-[40px] font-bold text-[1.125rem] text-white"
            to="/self-diagnosis/anxiety"
          >
            불안감
          </Link>
        </li>

        <li>
          <img src={stress} srcSet={`${stress2x} 2x`} alt="불안감 이모지" />

          <Link
            className="w-[130px] h-[40px] flex justify-center items-center bg-[#65A595] rounded-[40px] font-bold text-[1.125rem] text-white"
            to="/self-diagnosis/stress"
          >
            직무 스트레스
          </Link>
        </li>
      </ul>

      <p className="text-[0.625rem] leading-4! whitespace-pre-line text-[#545454]">
        ※ 진단 결과는 전문 상담을 대신할 수 없으며,{"\n"}
        필요할 경우 전문가와 상의하시길 권장합니다.
      </p>
    </div>
  );
};
