import { useEffect, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { Heading1 } from "../../../shared/components/Heading1";
import testSetJson from "./test-set.json";
import type { TestSet } from "./types";
import magnifier from "../assets/magnifier.webp";
import magnifier2x from "../assets/magnifier@2x.webp";

const testSet = testSetJson as TestSet;

type Inputs = { [key: string]: string };

export const StressTestPage: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const score = Object.keys(data)
      .map((value) => parseInt(value, 10))
      .reduce(
        (acc, cur) => {
          if (cur === 1) {
            acc.gender = data[cur] as "MALE" | "FEMALE";
            return acc;
          }

          if (cur < 4) {
            acc.t1 += parseInt(data[cur], 10);
            return acc;
          }

          if (cur < 7) {
            acc.t2 += parseInt(data[cur], 10);
            return acc;
          }

          if (cur < 9) {
            acc.t3 += parseInt(data[cur], 10);
            return acc;
          }

          if (cur < 11) {
            acc.t4 += parseInt(data[cur], 10);
            return acc;
          }

          if (cur < 13) {
            acc.t5 += parseInt(data[cur], 10);
            return acc;
          }

          if (cur < 17) {
            acc.t6 += parseInt(data[cur], 10);
            return acc;
          }

          if (cur < 19) {
            acc.t7 += parseInt(data[cur], 10);
            return acc;
          }

          acc.t8 += parseInt(data[cur], 10);
          return acc;
        },
        {
          gender: "MALE",
          t1: 0,
          t2: 0,
          t3: 0,
          t4: 0,
          t5: 0,
          t6: 0,
          t7: 0,
          t8: 0,
        } as {
          gender: "MALE" | "FEMALE";
          t1: number;
          t2: number;
          t3: number;
          t4: number;
          t5: number;
          t6: number;
          t7: number;
          t8: number;
        }
      );

    navigate({
      to: "/self-diagnosis/stress/result",
      search: score,
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
      <Heading1>직무 스트레스 자가진단 테스트</Heading1>

      <p className="text-[0.875rem] text-center">
        아래의 설문은 귀하의 직무수행 과정에서의
        <br />
        직무 스트레스 수준을 평가하기 위한 것입니다.
        <br />
        최근 한 달 동안의 느낌과 경험을 토대로 응답하여 주시길 바랍니다.
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
