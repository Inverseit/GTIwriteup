import { useEffect, useState } from "react";
import { TimerContainer } from "./TimerContainer";

type TimerComponentProps = {
  countDownDate: number | Date;
};

function calculateTimeRemaining(difference: number) {
  if (difference < 0) {
    return { newDays: 0, newHours: 0, newMinutes: 0, newSeconds: 0 };
  }

  const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const newHours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { newDays, newHours, newMinutes, newSeconds };
}

const TimerComponent: React.FC<TimerComponentProps> = ({ countDownDate }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const updateTimeHelper = () => {
      const now = new Date().getTime();
      let difference = 0;
      if (countDownDate instanceof Date) {
        difference = countDownDate.getTime() - now;
      } else{
        difference = countDownDate - now;
      }

      const { newDays, newHours, newMinutes, newSeconds } =
        calculateTimeRemaining(difference);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    updateTimeHelper()
    const updateTime = setInterval(updateTimeHelper, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, [countDownDate]);

  return (
    <TimerContainer
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default TimerComponent;
