import type { FC } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { Heading1 } from "../../../shared/components/Heading1";
import greenTherometer from "../assets/thermometers/green-thermometer.webp";
import greenTherometer2x from "../assets/thermometers/green-thermometer@2x.webp";
import darkRedTherometer from "../assets/thermometers/dark-red-thermometer.webp";
import darkRedTherometer2x from "../assets/thermometers/dark-red-thermometer@2x.webp";

export const StressResultPage: FC = () => {
  const {
    gender,
    t1 = 0,
    t2 = 0,
    t3 = 0,
    t4 = 0,
    t5 = 0,
    t6 = 0,
    t7 = 0,
    t8 = 0,
  } = useSearch({
    from: "/self-diagnosis/stress/result",
  });

  // 물리적 환경 데이터
  const t1Data = (() => {
    const isGood =
      (gender === "MALE" && t1 < 7) || (gender === "FEMALE" && t1 < 6);

    if (isGood) {
      return {
        title: "물리적 환경",
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        isGood,
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "물리적 환경",
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      isGood,
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  // 직무 요구 데이터
  const t2Data = (() => {
    const isGood =
      (gender === "MALE" && t2 < 8) || (gender === "FEMALE" && t2 < 10);

    if (isGood) {
      return {
        title: "직무 요구",
        isGood,
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "직무 요구",
      isGood,
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  // 직무 자율 데이터
  const t3Data = (() => {
    const isGood =
      (gender === "MALE" && t3 < 5) || (gender === "FEMALE" && t3 < 7);

    if (isGood) {
      return {
        title: "직무 자율",
        isGood,
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "직무 자율",
      isGood,
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  // 관계갈등 데이터
  const t4Data = (() => {
    const isGood =
      (gender === "MALE" && t4 < 5) || (gender === "FEMALE" && t4 < 7);

    if (isGood) {
      return {
        title: "관계 갈등",
        isGood,
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "관계 갈등",
      isGood,
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  // 직무불안성 데이터
  const t5Data = (() => {
    const isGood =
      (gender === "MALE" && t5 < 6) || (gender === "FEMALE" && t5 < 5);

    if (isGood) {
      return {
        title: "직무 불안정",
        isGood,
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "직무 불안정",
      isGood,
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  // 조직체계 데이터
  const t6Data = (() => {
    const isGood =
      (gender === "MALE" && t6 < 10) || (gender === "FEMALE" && t6 < 11);

    if (isGood) {
      return {
        title: "조직체계",
        isGood,
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "조직체계",
      isGood,
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  // 보상부적절 데이터
  const t7Data = (() => {
    const isGood =
      (gender === "MALE" && t7 < 6) || (gender === "FEMALE" && t7 < 5);

    if (isGood) {
      return {
        title: "보상 부적절",
        isGood,
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "보상 부적절",
      isGood,
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  // 일-삶의 균형 데이터
  const t8Data = (() => {
    const isGood =
      (gender === "MALE" && t8 < 6) || (gender === "FEMALE" && t8 < 6);

    if (isGood) {
      return {
        title: "직장 문화",
        isGood,
        image: {
          src: greenTherometer,
          srcSet: `${greenTherometer2x} 2x`,
        },
        scoreDescription: <span className="text-[#83B583]">정상범위</span>,
        heading: "",
        description: "",
      };
    }

    return {
      title: "직장 문화",
      isGood,
      image: {
        src: darkRedTherometer,
        srcSet: `${darkRedTherometer2x} 2x`,
      },
      scoreDescription: <span className="text-[#A84945]">위험수준</span>,
      heading: "",
      description: "",
    };
  })();

  const allData = [
    t1Data,
    t2Data,
    t3Data,
    t4Data,
    t5Data,
    t6Data,
    t7Data,
    t8Data,
  ].sort((a, b) => {
    if (a.isGood === b.isGood) return 0;

    if (!a.isGood) return -1;

    return 1;
  });

  return (
    <div className="flex flex-col items-center p-4">
      <Heading1>귀하의 직무 스트레스는..</Heading1>

      <ul className="mt-4 max-w-3xl flex gap-3 justify-center items-center flex-wrap">
        {allData.map((data) => (
          <li
            key={data.title}
            className="p-1 w-[150px] h-[210px] rounded-[5px] border border-[#A29898] flex flex-col items-center"
          >
            <h2 className="w-[75px] h-[24px] rounded-[5px] bg-[#D9D9D9] text-black font-semibold text-[0.875rem] flex justify-center items-center">
              {data.title}
            </h2>

            <div className="mt-1">
              <img
                className="h-[92px]"
                src={data.image.src}
                srcSet={data.image.srcSet}
              />
            </div>

            <p className="text-[0.875rem] font-semibold">
              {data.scoreDescription}
            </p>

            <h3 className="font-semibold text-black whitespace-pre-line">
              {data.heading}
            </h3>

            <p className="font-semibold text-[0.875rem] whitespace-pre-line">
              {data.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          className="w-[161px] h-[35px] flex justify-center items-center font-bold text-[1.125rem] text-white bg-[#65A595] rounded-[40px] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          to="/self-diagnosis/stress/help"
        >
          도움 기관 찾기
        </Link>
        <Link
          className="w-[161px] h-[35px] flex justify-center items-center font-bold text-[1.125rem] text-white bg-[#ACC9C2] hover:bg-[#65A595] active:bg-[#65A595] rounded-[40px] shadow-[0px_4px_4px_rgb(0_0_0/0.25)]"
          to="/self-diagnosis/stress/write"
        >
          마음 필사
        </Link>
      </div>
    </div>
  );
};
