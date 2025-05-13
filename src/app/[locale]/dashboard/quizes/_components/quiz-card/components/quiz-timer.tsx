'use client';
import { LucideAlarmClock } from 'lucide-react';
import { useEffect, useState } from 'react';

type QuizTimerProps = {
  duration: number;
  onQuizTimeEnd?: () => void;
  onTimerChange?: (date: Date) => void;
};
export default function QuizTimer({
  duration,
  onQuizTimeEnd,
  onTimerChange,
}: QuizTimerProps) {
  const [timer, setTimer] = useState(new Date(0).setMinutes(duration));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        const currentDate = new Date(prev);

        if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
          onQuizTimeEnd?.();
          window.clearInterval(timerInterval);
          return 0;
        }
        // Track the time and store in the form each minutes
        if (currentDate.getSeconds() === 0) {
          onTimerChange?.(currentDate);
        }

        // update the timer value each second
        return currentDate.setSeconds(currentDate.getSeconds() - 1);
      });
    }, 1000);

    return () => window.clearInterval(timerInterval);
  }, [onQuizTimeEnd, onTimerChange]);

  return (
    <p className="flex items-center gap-1">
      <LucideAlarmClock className="mb-1 size-5 text-brand" />
      <span className="text-green-500">
        {Intl.DateTimeFormat('us-en', {
          minute: '2-digit',
          second: '2-digit',
        }).format(new Date(timer))}
      </span>
    </p>
  );
}
