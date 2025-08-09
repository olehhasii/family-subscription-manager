import { useEffect, useState } from 'react';
import { ClockWrapper, Date as StyledDate, Time } from './Clock.styles';

export default function Clock() {
  const [timestamp, setTimestamp] = useState(Date.now());

  const dateFormatter = new Intl.DateTimeFormat(navigator.language).format;
  const timeFormatter = new Intl.DateTimeFormat(navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hourCycle: 'h23',
  }).format;

  useEffect(() => {
    setTimestamp(Date.now());

    const now = Date.now();
    const msUntilNextSecond = 1000 - (now % 1000);

    let intervalId: number | undefined;

    // timer to start changing time when it will exatcly 00 in milliseconds
    const timeoutId = setTimeout(() => {
      setTimestamp(Date.now());

      intervalId = setInterval(() => {
        setTimestamp(Date.now());
      }, 1000);
    }, msUntilNextSecond);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <ClockWrapper>
      <StyledDate>{dateFormatter(timestamp)}</StyledDate>
      <Time>{timeFormatter(timestamp)}</Time>
    </ClockWrapper>
  );
}
