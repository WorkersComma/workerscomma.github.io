import type { FC } from "react";
import { Heading1 } from "../../../shared/components/Heading1";

export const StressTestPage: FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <Heading1>직무 스트레스 자가진단 테스트</Heading1>

      <p className="text-[0.875rem] text-center mt-4">
        아래의 설문은 귀하의 직무수행 과정에서의
        <br />
        직무 스트레스 수준을 평가하기 위한 것입니다.
        <br />
        최근 한 달 동안의 느낌과 경험을 토대로 응답하여 주시길 바랍니다.
      </p>

      <div className="mt-4"></div>
    </div>
  );
};
