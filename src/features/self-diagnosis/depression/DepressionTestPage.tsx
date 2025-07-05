import type { FC } from "react";
import { Heading1 } from "../../../shared/components/Heading1";

export const DepressionTestPage: FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <Heading1>우울감 자가진단 테스트</Heading1>

      <p className="text-[0.875rem] text-center mt-4">
        아래의 설문은 근로자 우울 자가진단 설문도구입니다.
        <br />
        최근 2주 동안 , 아래의 문제들로 인해 얼마나 자주 불편함을
        <br />
        느끼셨는지 응답하여 주시길 바랍니다.
      </p>

      <div className="mt-4"></div>
    </div>
  );
};
