import { useEffect, useState } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer = ({ days, hours, minutes, seconds }: Countdown) => {
  const [time, setTime] = useState<Countdown>({
    days,
    hours,
    minutes,
    seconds,
  });

  const tick = () => {
    if (
      time.days === 0 &&
      time.hours === 0 &&
      time.minutes === 0 &&
      time.seconds === 0
    )
      reset();
    else if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setTime({
        days: time.days - 1,
        hours: 23,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.minutes === 0 && time.seconds === 0) {
      setTime({
        days: time.days,
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      setTime({
        days: time.days,
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        days: time.days,
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      days: time.days,
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <p>
      {`${time.days.toString()}일 ${time.hours
        .toString()
        .padStart(2, '0')}:${time.minutes
        .toString()
        .padStart(2, '0')}:${time.seconds
        .toString()
        .padStart(2, '0')} 남았어요`}
    </p>
  );
};

export default CountDownTimer;
