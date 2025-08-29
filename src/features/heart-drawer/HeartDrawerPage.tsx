import { useRef, useState, type FC, type FormEventHandler } from "react";
import { useHeartDrawers } from "./hooks/useHeartDrawer";
import { useSearch } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import appreciation1x from "./assets/appreciation.webp";
import appreciation2x from "./assets/appreciation@2x.webp";
import pleasure1x from "./assets/pleasure.webp";
import pleasure2x from "./assets/pleasure@2x.webp";
import sympathy1x from "./assets/sympathy.webp";
import sympathy2x from "./assets/sympathy@2x.webp";
import shame1x from "./assets/shame.webp";
import shame2x from "./assets/shame@2x.webp";
import anger1x from "./assets/anger.webp";
import anger2x from "./assets/anger@2x.webp";
import depression1x from "./assets/depression.webp";
import depression2x from "./assets/depression@2x.webp";
import proud1x from "./assets/proud.webp";
import proud2x from "./assets/proud@2x.webp";
import stress1x from "./assets/stress.webp";
import stress2x from "./assets/stress@2x.webp";
import { HeartDrawerFooter } from "./components/HeartDrawerFooter";
import type { Emotion } from "./shared/types";
import {
  createHeartDrawer,
  deleteHeartDrawer,
  updateHeartDrawer,
} from "./service";

export const HeartDrawerPage: FC = () => {
  const { date: dateQuery } = useSearch({ from: "/heart-drawer/" });
  const heartDrawers = useHeartDrawers();

  const todayDate = useRef(new Date());

  const intialHeartDrawerDate = dateQuery
    ? new Date(dateQuery)
    : todayDate.current;

  const [year, setYear] = useState(intialHeartDrawerDate.getFullYear());
  const [month, setMonth] = useState(intialHeartDrawerDate.getMonth() + 1);
  const [date, setDate] = useState(intialHeartDrawerDate.getDate());

  const heartDrawer = heartDrawers.find(
    (heartDrawer) =>
      heartDrawer.date ===
      `${year.toString().padStart(4, "0")}-${month
        .toString()
        .padStart(2, "0")}-${date.toString().padStart(2, "0")}`
  );
  const heartDrawerRef = useRef(
    heartDrawers.find(
      (heartDrawer) =>
        heartDrawer.date ===
        `${year.toString().padStart(4, "0")}-${month
          .toString()
          .padStart(2, "0")}-${date.toString().padStart(2, "0")}`
    )
  );

  const [emotion, setEmotion] = useState<Emotion | "">(
    heartDrawerRef.current?.emotion ?? ""
  );

  const [diary, setDiary] = useState(heartDrawerRef.current?.diary ?? "");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!emotion) {
      alert("감정을 선택해주세요");
      return;
    }

    if ([year, month, date].some(Number.isNaN)) {
      alert("날짜가 잘못됐습니다.");
      return;
    }

    setIsDeleted(false);
    try {
      setIsSaved(true);
      if (heartDrawerRef.current) {
        await updateHeartDrawer({
          ...heartDrawerRef.current,
          date: `${year.toString().padStart(4, "0")}-${month
            .toString()
            .padStart(2, "0")}-${date.toString().padStart(2, "0")}`,
          diary,
          emotion,
        });

        return;
      }

      await createHeartDrawer({
        diary,
        date: `${year.toString().padStart(4, "0")}-${month
          .toString()
          .padStart(2, "0")}-${date.toString().padStart(2, "0")}`,
        emotion,
      });
    } catch (e) {
      setIsSaved(false);
      console.error(e);
      alert("동일한 날짜의 일기가 이미 존재합니다.");
    }
  };

  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = async () => {
    setIsSaved(false);
    setIsDeleted(true);
    setEmotion("");
    setDiary("");

    if (heartDrawerRef.current) {
      await deleteHeartDrawer(heartDrawerRef.current.id);
      heartDrawerRef.current = undefined;
    }
  };

  if (heartDrawer?.id !== heartDrawerRef.current?.id) {
    heartDrawerRef.current = heartDrawer;
    setDiary(heartDrawer?.diary ?? "");
    setEmotion(heartDrawer?.emotion ?? "");
  }

  return (
    <div className="w-full flex-1 flex flex-col gap-4">
      <p className="text-center font-sans font-semibold text-[0.8125rem] text-[#318470]">
        <span className="text-[1rem]">근로자</span>님,
        <br />
        오늘 근무는 어떠셨나요?
        <br />
        콩쉼이로 감정을 기록해 보세요.
      </p>
      <form
        className="flex-1 flex flex-col gap-4 items-center"
        onSubmit={handleSave}
      >
        <fieldset>
          <legend className="size-0 overflow-hidden">감정 선택</legend>

          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col">
              <div className="w-[298px] h-[54px] flex items-center bg-white rounded-[10px] border border-[#EEF0F3]">
                <div className="relative flex-1 h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "PLEASURE" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="pleasure"
                    value="PLEASURE"
                    checked={emotion === "PLEASURE"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={pleasure1x}
                    srcSet={`${pleasure2x} 2x`}
                    alt="콩쉼이 기쁨"
                  />
                </div>

                <div className="relative flex-1 h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "PROUD" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="proud"
                    value="PROUD"
                    checked={emotion === "PROUD"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={proud1x}
                    srcSet={`${proud2x} 2x`}
                    alt="콩쉼이 자부심"
                  />
                </div>

                <div className="relative flex-1 h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "APPRECIATION" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="appreciation"
                    value="APPRECIATION"
                    checked={emotion === "APPRECIATION"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={appreciation1x}
                    srcSet={`${appreciation2x} 2x`}
                    alt="콩쉼이 감사"
                  />
                </div>

                <div className="relative flex-1 h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "SYMPATHY" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="sympathy"
                    value="SYMPATHY"
                    checked={emotion === "SYMPATHY"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={sympathy1x}
                    srcSet={`${sympathy2x} 2x`}
                    alt="콩쉼이 연민"
                  />
                </div>
              </div>

              <div className="w-[298px] flex items-center border border-transparent">
                <label
                  className={twMerge(
                    "flex-1 text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "PLEASURE" && "text-[#E89C5F]"
                  )}
                  htmlFor="pleasure"
                >
                  기쁨
                </label>
                <label
                  className={twMerge(
                    "flex-1 text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "PROUD" && "text-[#E89C5F]"
                  )}
                  htmlFor="proud"
                >
                  자부심
                </label>
                <label
                  className={twMerge(
                    "flex-1 text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "APPRECIATION" && "text-[#E89C5F]"
                  )}
                  htmlFor="appreciation"
                >
                  감사
                </label>
                <label
                  className={twMerge(
                    "flex-1 text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "SYMPATHY" && "text-[#E89C5F]"
                  )}
                  htmlFor="sympathy"
                >
                  연민
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-[298px] h-[54px] flex items-center justify-center bg-white rounded-[10px] border border-[#EEF0F3]">
                <div className="relative basis-[74px] h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "DEPRESSION" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="depression"
                    value="DEPRESSION"
                    checked={emotion === "DEPRESSION"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={depression1x}
                    srcSet={`${depression2x} 2x`}
                    alt="콩쉼이 슬픔"
                  />
                </div>

                <div className="relative basis-[74px] h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "ANGER" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="anger"
                    value="ANGER"
                    checked={emotion === "ANGER"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={anger1x}
                    srcSet={`${anger2x} 2x`}
                    alt="콩쉼이 분노"
                  />
                </div>

                <div className="relative basis-[74px] h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "SHAME" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="shame"
                    value="SHAME"
                    checked={emotion === "SHAME"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={shame1x}
                    srcSet={`${shame2x} 2x`}
                    alt="콩쉼이 수치심"
                  />
                </div>

                <div className="relative basis-[74px] h-full">
                  <input
                    className={twMerge(
                      "w-full h-full appearance-none bg-transparent rounded-[10px] cursor-pointer",
                      emotion === "STRESS" && "bg-[rgba(152,234,83,0.22)]"
                    )}
                    type="radio"
                    name="emotion"
                    id="stress"
                    value="STRESS"
                    checked={emotion === "STRESS"}
                    onChange={(e) =>
                      e.target.checked &&
                      setEmotion(e.target.value as Emotion) &&
                      setIsSaved(false) &&
                      setIsDeleted(false)
                    }
                  />
                  <img
                    className="w-full h-full rounded-[10px] pointer-events-none absolute z-1 top-0 left-0 object-contain"
                    src={stress1x}
                    srcSet={`${stress2x} 2x`}
                    alt="콩쉼이 좌절감"
                  />
                </div>
              </div>

              <div className="w-[298px] flex items-center justify-center border border-transparent">
                <label
                  className={twMerge(
                    "basis-[74px] text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "DEPRESSION" && "text-[#E89C5F]"
                  )}
                  htmlFor="depression"
                >
                  슬픔
                </label>
                <label
                  className={twMerge(
                    "basis-[74px] text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "ANGER" && "text-[#E89C5F]"
                  )}
                  htmlFor="anger"
                >
                  분노
                </label>
                <label
                  className={twMerge(
                    "basis-[74px] text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "SHAME" && "text-[#E89C5F]"
                  )}
                  htmlFor="shame"
                >
                  수치심
                </label>
                <label
                  className={twMerge(
                    "basis-[74px] text-center text-[0.75rem] text-[#318470] font-semibold font-sans cursor-pointer text-shadow-[0px_1px_1px_white,0px_-1px_1px_white,1px_0px_1px_white,-1px_0px_1px_white]",
                    emotion === "STRESS" && "text-[#E89C5F]"
                  )}
                  htmlFor="stress"
                >
                  좌절감
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="w-full basis-[219px] min-w-[298px] not-sm:max-w-[339px] max-w-3xl rounded-[10px] bg-white border border-[#EEF0F3] p-2 flex">
          <div className="flex-1 flex flex-col gap-2 bg-[linear-gradient(to_right,rgb(200_221_255/1)_0.3px,transparent_1px),linear-gradient(to_bottom,rgb(200_221_255/1)_0.3px,transparent_1px)] bg-[size:8px_8px] bg-clip-content">
            <fieldset className="flex gap-4 justify-center mt-4">
              <div className="flex items-center gap-1">
                <input
                  className="w-[60px] h-[20px] rounded-[10px] bg-white border border-[#EEF0F3] text-center font-sans font-medium text-[0.8125rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                  type="number"
                  name="year"
                  id="year"
                  value={Number.isNaN(year) ? "" : year}
                  onChange={(e) => {
                    setYear(parseInt(e.target.value));
                    setIsSaved(false);
                    setIsDeleted(false);
                  }}
                />

                <label
                  htmlFor="year"
                  className="font-medium font-sans text-[0.8125rem]"
                >
                  년
                </label>
              </div>

              <div className="flex items-center gap-1">
                <input
                  className="w-[40px] h-[20px] rounded-[10px] bg-white border border-[#EEF0F3] text-center font-sans font-medium text-[0.8125rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                  type="number"
                  name="month"
                  id="month"
                  value={Number.isNaN(month) ? "" : month}
                  onChange={(e) => {
                    setMonth(parseInt(e.target.value));
                    setIsSaved(false);
                    setIsDeleted(false);
                  }}
                />
                <label
                  htmlFor="month"
                  className="font-medium font-sans text-[0.8125rem]"
                >
                  월
                </label>
              </div>

              <div className="flex items-center gap-1">
                <input
                  className="w-[40px] h-[20px] rounded-[10px] bg-white border border-[#EEF0F3] text-center font-sans font-medium text-[0.8125rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                  type="number"
                  name="date"
                  id="date"
                  value={Number.isNaN(date) ? "" : date}
                  onChange={(e) => {
                    setDate(parseInt(e.target.value));
                    setIsSaved(false);
                    setIsDeleted(false);
                  }}
                />
                <label
                  htmlFor="date"
                  className="font-medium font-sans text-[0.8125rem]"
                >
                  일
                </label>
              </div>
            </fieldset>

            <label htmlFor="diary" className="size-0 overflow-hidden">
              마음 일기
            </label>
            <textarea
              className="flex-1 font-sans font-medium text-[0.8125rem] p-2"
              name="diary"
              id="diary"
              value={diary}
              onChange={(e) => {
                setDiary(e.target.value);
                setIsSaved(false);
                setIsDeleted(false);
              }}
            />
          </div>
        </div>

        <HeartDrawerFooter
          saved={isSaved}
          deleted={isDeleted}
          onDelete={handleDelete}
        />
      </form>
    </div>
  );
};
