import { useEffect, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Heading1 } from "../../../shared/components/Heading1";
import testSet from "./test-set.json";
import magnifier from "../assets/magnifier.webp";
import magnifier2x from "../assets/magnifier@2x.webp";

type Inputs = { [key: string]: number };

export const AnxietyTestPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      setFocus(errorKeys[0]);
    }
  }, [errors, setFocus]);

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <Heading1>불안감 자가진단 테스트</Heading1>

      <p className="text-[0.875rem] text-center leading-5">
        아래의 설문은 불안감과 관련한 인지적,
        <br />
        정서적, 신체적 증상에 대한 검사입니다.
        <br />
        지난 2주일 동안 당신이 다음의 문제들로 인해서
        <br />
        얼마나 자주 방해를 받았는지 응답하여 주시길 바랍니다.
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
                  className={`font-medium text-[0.875rem]${
                    errors[test.id] ? " text-red-500" : ""
                  }`}
                >
                  {index + 1}. {test.question}
                </legend>

                <div className="mt-2 flex flex-wrap gap-1 justify-around @min-[351px]:justify-start">
                  {test.options.map((option) => (
                    <div
                      key={`${test.id}-${option.value}`}
                      className="flex items-center gap-1"
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
