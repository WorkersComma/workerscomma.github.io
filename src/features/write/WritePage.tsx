import { useState, type FC } from "react";
import { Heading1 } from "../../shared/components/Heading1";
import mainLogo from "./assets/main-logo.webp";
import mainLogo2x from "./assets/main-logo@2x.webp";
import pencil from "./assets/pencil.webp";
import pencil2x from "./assets/pencil@2x.webp";

const SENTENCE = "작은 성취가 큰 변화를 이끈다.";

export const WritePage: FC = () => {
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  if (!isCorrect && value.replace(/[\s\r\n\t\v\f]+/g, " ") === SENTENCE) {
    setIsCorrect(true);
  }

  if (isCorrect) {
    return (
      <div className="p-4 flex flex-col items-center min-h-[inherit]">
        <Heading1>마음 필사</Heading1>

        <div className="max-w-xl flex flex-col justify-center items-center gap-8 flex-1">
          <p className="max-w-xs font-medium text-[#65A595] text-[1.25rem] text-center">
            {SENTENCE}
          </p>

          <img
            className="w-[156px] h-[151px]"
            src={mainLogo}
            srcSet={`${mainLogo2x} 2x`}
            alt="워커스 메인 로고"
          />

          <p className="font-medium text-black text-[1.25rem] text-center">
            오늘도 자신의 마음을
            <br />
            돌봐주셔서 감사합니다.
            <br />
            건강한 하루 보내세요.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <Heading1>마음 필사</Heading1>

      <div className="relative max-w-xl mt-10 px-5 py-10 w-full flex flex-col items-center bg-white border border-[#EEF0F3] rounded-[10px]">
        <p className="font-medium text-black text-[1.25rem]">{SENTENCE}</p>

        <div className="relative mt-4">
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

        <img
          className="absolute -bottom-[90px] -right-[20px]"
          src={pencil}
          srcSet={`${pencil2x} 2x`}
          alt="연필"
        />
      </div>

      <p className="mt-9 text-center font-semibold">
        <span className="text-[#245768]">자가진단 후 마음 필사로</span>
        <br />
        <span className="text-[#245768]">마음에 휴식을 주세요!</span>

        <br />
        <br />

        <span className="text-[#65A595]">
          우울감, 불안감, 직무 스트레스에 맞는
        </span>
        <br />
        <span className="text-[#65A595]">
          웰빙인지 문구를 스스로 타이핑하며
        </span>
        <br />
        <span className="text-[#65A595]">웰빙 정서를 활성화 해요.</span>
      </p>
    </div>
  );
};
