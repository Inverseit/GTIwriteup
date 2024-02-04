import React from "react";
import { NumberBox } from "./NumberBox";

interface timeProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const toStr = (x: number): string => (x < 10 ? "0" + x : "" + x);

export const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: timeProps) => {
  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }

  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (hours == 0) {
    hoursFlip = false;
    if (days != 0) {
      daysFlip = true;
    }
  }

  return (
    <div className="mt-2 md:mt-4 rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8 ">
        {days > 0 && (
          <>
            <NumberBox num={toStr(days)} unit="Days" flip={daysFlip} />
            <span className=" hidden text-6xl -mt-8 md:inline-block md:text-9xl font-normal text-black dark:text-white">
              :
            </span>
          </>
        )}
        <NumberBox num={toStr(hours)} unit="Hours" flip={hoursFlip} />
        <span className="hidden text-6xl -mt-8 md:inline-block md:text-9xl font-normal text-black  dark:text-white">
          :
        </span>
        <NumberBox num={toStr(minutes)} unit="Minutes" flip={minutesFlip} />
        <span className="hidden text-6xl -mt-8 md:inline-block md:text-9xl font-normal text-black  dark:text-white">
          :
        </span>
        <NumberBox num={toStr(seconds)} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};
