import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

type QuizCardProps = {
  quiz: Quiz;
};

const icons = {
  html: '/assets/html.svg',
  css: '/assets/css.svg',
  javascript: '/assets/javascript.svg',
  react: '/assets/react.svg',
};

type Icons = 'html' | 'css' | 'javascript' | 'react';

export default function QuizCard({ quiz }: QuizCardProps) {
  const mappedName = quiz.title.split(' ')[0].toLocaleLowerCase();

  return (
    <div className="flex items-center gap-4 rounded-lg bg-brand-light/60 p-4 shadow-sm">
      <div className="relative size-[85px]">
        <Image
          src={icons[mappedName as Icons] || '/assets/test.jpg'}
          fill
          alt={quiz.title}
          className="object-cover"
        />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-lg font-medium">{quiz.title}</p>
        <p className="text-my-grey-500">{quiz.numberOfQuestions} questions</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">{quiz.duration} minutes</p>
        <Button variant="brand" size="sm" className="rounded-full px-6">
          Start
        </Button>
      </div>
    </div>
  );
}
