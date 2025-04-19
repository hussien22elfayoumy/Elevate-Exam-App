'use client';
import { LucideAlarmClock } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect } from 'react';

type QuizTimerProps = {
  duration: number;
  onQuizTimeEnd?: () => void;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
};
export default function QuizTimer({
  duration,
  onQuizTimeEnd,
  timer,
  setTimer,
}: QuizTimerProps) {
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        const currentDate = new Date(prev);

        if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
          console.log('finshed');
          onQuizTimeEnd?.();
          window.clearInterval(timerInterval);

          return 0;
        }
        return currentDate.setSeconds(currentDate.getSeconds() - 1);
      });
    }, 1000);

    return () => window.clearInterval(timerInterval);
  }, []);

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
