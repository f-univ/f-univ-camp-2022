import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

interface Countdown {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer = ({ hours, minutes, seconds }: Countdown) => {
  const [time, setTime] = useState<Countdown>({
    hours,
    minutes,
    seconds,
  });

  const tick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) reset();
    else if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setTime({
        hours: 23,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.minutes === 0 && time.seconds === 0) {
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <Wrapper>
      <p>COMING SOON</p>
      {`${time.hours.toString().padStart(2, '0')}:${time.minutes
        .toString()
        .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
    </Wrapper>
  );
};

export default CountDownTimer;

const Wrapper = styled.p`
  font-family: 'Pretendard-Medium';
  font-weight: bold;
  font-size: 1.1rem;
  color: #406bee;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.6rem;
`;
