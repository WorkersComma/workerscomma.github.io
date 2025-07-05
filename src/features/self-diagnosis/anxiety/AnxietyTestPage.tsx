import type { FC } from "react";
import { Heading1 } from "../../../shared/components/Heading1";
import testSet from "./test-set.json";

export const AnxietyTestPage: FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <Heading1>불안감 자가진단 테스트</Heading1>

      <p className="text-[0.875rem] text-center mt-4">
        아래의 설문은 불안감과 관련한 인지적, 정서적, 신체적 증상에
        <br />
        대한 검사입니다. 지난 2주일 동안 당신이 다음의 문제들로 인해서
        <br />
        얼마나 자주 방해를 받았는지 응답하여 주시길 바랍니다.
      </p>

      <div className="mt-4"></div>
    </div>
  );
};
