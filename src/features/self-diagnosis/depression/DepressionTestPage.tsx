import { useEffect, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { Heading1 } from "../../../shared/components/Heading1";
import testSet from "./test-set.json";
import magnifier from "../assets/magnifier.webp";
import magnifier2x from "../assets/magnifier@2x.webp";

type Inputs = { [key: string]: string };

export const DepressionTestPage: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const score = Object.values(data)
      .map((value) => parseInt(value, 10))
      .reduce((a, b) => a + b);

    navigate({
      to: "/self-diagnosis/depression/result",
      search: {
        score,
      },
    });
  };

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      setFocus(errorKeys[0]);
    }
  }, [errors, setFocus]);

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <Heading1>우울감 자가진단 테스트</Heading1>

      <p className="text-[0.875rem] text-center">
        아래의 설문은 근로자 우울 자가진단 설문도구입니다.
        <br />
        최근 2주 동안 , 아래의 문제들로 인해 얼마나 자주 불편함을
        <br />
        느끼셨는지 응답하여 주시길 바랍니다.
      </p>

      <div className="relative w-full max-w-3xl">
        <img
          className="absolute z-10 bg-transparent pointer-events-none -right-[20px] -top-[35px]"
          src={magnifier}
          srcSet={`${magnifier2x} 2x`}
          alt="돋보기"
        />

        <form
          className="w-full flex flex-col items-center gap-2 bg-white rounded-[10px] border border-[#EEF0F3] py-4 px-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {testSet.map((test, index) => (
            <div
              key={test.question}
              className="w-full border-b last-of-type:border-none border-b-[#E5E5E5] p-1 pb-2"
            >
              <fieldset className="@container w-full">
                <legend
                  className={`font-medium text-[0.875rem] whitespace-pre-line${
                    errors[test.id] ? " text-red-500" : ""
                  }`}
                >
                  {index + 1}. {test.question}
                </legend>

                <div className="mt-2 flex flex-wrap gap-1 md:gap-4 justify-between @min-[351px]:justify-start">
                  {test.options.map((option) => (
                    <div
                      key={`${test.id}-${option.value}`}
                      className="flex items-center gap-0.5"
                    >
                      <input
                        type="radio"
                        id={`${test.id}-${option.value}`}
                        defaultValue={option.value}
                        {...register(test.id.toString(), { required: true })}
                      />
                      <label
                        htmlFor={`${test.id}-${option.value}`}
                        className="text-[0.75rem] font-medium text-[#636363]"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}

          <button
            type="submit"
            className="w-[188px] h-[50px] rounded-[40px] bg-[#65A595] text-white font-bold text-[1.25rem] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          >
            결과 보러가기
          </button>
        </form>
      </div>
    </div>
  );
};
