import { useEffect, useMemo, useRef, useState, type FC } from "react";
import { useHeartDrawers } from "./hooks/useHeartDrawer";
import type { HeartDrawer } from "./shared/types";
import anger1x from "./assets/anger.webp";
import anger2x from "./assets/anger@2x.webp";
import depression1x from "./assets/depression.webp";
import depression2x from "./assets/depression@2x.webp";
import proud1x from "./assets/proud.webp";
import proud2x from "./assets/proud@2x.webp";
import stress1x from "./assets/stress.webp";
import stress2x from "./assets/stress@2x.webp";
import { Link } from "@tanstack/react-router";

export const HeartDrawerBookMarkPage: FC = () => {
  const heartDrawers = useHeartDrawers();

  const initialDate = new Date();
  const [year, setYear] = useState(initialDate.getFullYear());
  const [month, setMonth] = useState(initialDate.getMonth() + 1);

  const fallbackStartDateRef = useRef(new Date(year, month - 1));
  const startDate = useMemo(() => {
    if ([year, month].some(Number.isNaN)) {
      return fallbackStartDateRef.current;
    }

    fallbackStartDateRef.current = new Date(year, month - 1);
    return fallbackStartDateRef.current;
  }, [year, month]);
  const calendar = useMemo(() => {
    const calendarYear = startDate.getFullYear().toString().padStart(4, "0");
    const calendarMonth = (startDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const heartDrawersForCurrentCalendar = heartDrawers
      .filter((v) => v.date.startsWith(`${calendarYear}-${calendarMonth}`))
      .reduce((acc, cur) => {
        acc[cur.date] = cur;
        return acc;
      }, {} as { [date: string]: HeartDrawer });

    const firstDateOfCalendar = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() - startDate.getDay()
    );
    const lastDateOfCalendar = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      0
    );
    const calendar = new Array<Array<HeartDrawer | null>>(
      Math.ceil((lastDateOfCalendar.getDate() + startDate.getDay()) / 7)
    )
      .fill(Array(7).fill(null))
      .map((week, weekIndex) => {
        return week.map((date, dateIndex) => {
          const currentDate = new Date(
            firstDateOfCalendar.getFullYear(),
            firstDateOfCalendar.getMonth(),
            firstDateOfCalendar.getDate() + weekIndex * 7 + dateIndex
          );
          const currentYear = currentDate
            .getFullYear()
            .toString()
            .padStart(4, "0");
          const currentMonth = (currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0");
          const currentDay = currentDate.getDate().toString().padStart(2, "0");

          if (
            heartDrawersForCurrentCalendar[
              `${currentYear}-${currentMonth}-${currentDay}`
            ]
          ) {
            return heartDrawersForCurrentCalendar[
              `${currentYear}-${currentMonth}-${currentDay}`
            ];
          } else {
            return date;
          }
        });
      });

    return calendar;
  }, [heartDrawers, startDate]);

  useEffect(() => {
    console.log(calendar);
  }, [calendar]);

  return (
    <div className="w-full flex-1 flex flex-col gap-4">
      <p className="text-center font-sans font-semibold text-[0.875rem] text-[#318470]">
        지난 날, 근로자님의 <span className="text-[1.125rem]">마음</span>을
        <br />
        콩쉼이가 <span className="text-[1.125rem]">차곡차곡</span> 모았어요!
      </p>

      <div className="min-w-[298px] max-w-5xl w-full mx-auto rounded-[10px] bg-white border border-[#EEF0F3] p-6 flex flex-col gap-2">
        <fieldset className="flex gap-4 justify-center">
          <div className="flex items-center gap-1">
            <input
              className="w-[60px] h-[20px] rounded-[10px] border border-[#EEF0F3] text-center font-sans font-medium text-[0.8125rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
              type="number"
              name="year"
              id="year"
              value={Number.isNaN(year) ? "" : year}
              onChange={(e) => {
                setYear(parseInt(e.target.value));
              }}
            />

            <label htmlFor="year">년</label>
          </div>

          <div className="flex items-center gap-1">
            <input
              className="w-[40px] h-[20px] rounded-[10px] border border-[#EEF0F3] text-center font-sans font-medium text-[0.8125rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
              type="number"
              name="month"
              id="month"
              value={Number.isNaN(month) ? "" : month}
              onChange={(e) => {
                setMonth(parseInt(e.target.value));
              }}
            />
            <label htmlFor="month">월</label>
          </div>
        </fieldset>
        <div className="flex flex-col gap-2">
          <ol className="flex font-sans font-medium text-[0.8125rem] text-center *:flex-1">
            <li className="text-[#FF0A00]">일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li className="text-[#2E7CF6]">토</li>
          </ol>

          <ol className="flex flex-col h-full">
            {calendar.map((week) => (
              <li className="h-[50px]">
                <ol className="flex size-full">
                  {week.map((heartDrawer) => (
                    <li className="flex-1 h-full">
                      {heartDrawer && (
                        <Link
                          className="h-full flex justify-center"
                          to="/heart-drawer"
                          search={{ date: heartDrawer.date }}
                        >
                          <img
                            className="h-full"
                            src={
                              heartDrawer.emotion === "DEPRESSION"
                                ? depression1x
                                : heartDrawer.emotion === "PROUD"
                                ? proud1x
                                : heartDrawer.emotion === "STRESS"
                                ? stress1x
                                : anger1x
                            }
                            srcSet={
                              heartDrawer.emotion === "DEPRESSION"
                                ? depression2x
                                : heartDrawer.emotion === "PROUD"
                                ? proud2x
                                : heartDrawer.emotion === "STRESS"
                                ? stress2x
                                : anger2x
                            }
                          />
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
