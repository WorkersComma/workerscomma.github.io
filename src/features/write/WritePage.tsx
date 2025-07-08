import { useState, type FC } from "react";
import { Heading1 } from "../../shared/components/Heading1";

const SENTENCE = "작은 성취가 큰 변화를 이끈다.";

export const WritePage: FC = () => {
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  if (!isCorrect && value.replace(/[\s\r\n\t\v\f]+/g, " ") === SENTENCE) {
    setIsCorrect(true);
  }

  if (isCorrect) {
    return (
      <div className="p-4 flex flex-col items-center">
        <Heading1>마음 필사</Heading1>

        <p className="mt-9 font-medium text-black text-[1.25rem] text-center">
          {SENTENCE}
        </p>

        <p className="mt-6 font-medium text-black text-[1.25rem] text-center">
          오늘도 자신의 마음을
          <br />
          돌봐주셔서 감사합니다.
          <br />
          건강한 하루 보내세요.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <Heading1>마음 필사</Heading1>

      <div className="mt-10 px-5 py-10 w-full flex flex-col items-center bg-white border border-[#EEF0F3] rounded-[10px]">
        <p className="font-medium text-black text-[1.25rem]">{SENTENCE}</p>

        <div className="relative">
          <label
            htmlFor="write"
            className="font-medium text-[#BFBFBFff] text-[1.25rem]"
          >
            {SENTENCE}
          </label>

          <textarea
            id="write"
            className="absolute top-0 left-0 w-full h-full font-medium text-black text-[1.25rem] resize-none outline-none overflow-hidden"
            autoFocus
            onChange={(e) => setValue(e.target.value ?? "")}
          />
        </div>
      </div>
    </div>
  );
};
