import { useState, useEffect } from 'react';

export function useCountdown(targetDateString = '2026-11-14T09:00:00Z') {
  const calculateTimeLeft = () => {
    let target = new Date(targetDateString).getTime();
    const now = new Date().getTime();
    
    // In case the target is past in the client's local clock, set a reliable demonstration future offset
    if (target <= now) {
      target = now + (34 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (22 * 60 * 1000);
    }

    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isCompleted: false };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateString]);

  return timeLeft;
}
