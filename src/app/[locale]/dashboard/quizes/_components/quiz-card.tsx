import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

type QuizCardProps = {
  quiz: Quiz;
};

const quizIcons = {
  html: '/assets/html.svg',
  css: '/assets/css.svg',
  javascript: '/assets/javascript.svg',
  react: '/assets/react.svg',
};

type QuizIcons = 'html' | 'css' | 'javascript' | 'react';

export default function QuizCard({ quiz }: QuizCardProps) {
  // Variables
  const nameIcontMap = quiz.title.split(' ')[0].toLocaleLowerCase();

  return (
    <div className="flex items-center gap-4 rounded-lg bg-brand-light/60 p-4 shadow-sm">
      {/* Quiz Image */}
      <div className="relative size-[85px]">
        <Image
          src={quizIcons[nameIcontMap as QuizIcons] || '/assets/test.jpg'}
          fill
          alt={quiz.title}
          className="object-cover"
        />
      </div>
      <div className="flex-1 space-y-1">
        {/* Quiz title */}
        <p className="text-lg font-medium">{quiz.title}</p>

        {/* Number of Questions */}
        <p className="text-my-grey-500">{quiz.numberOfQuestions} questions</p>
      </div>
      <div className="space-y-1">
        {/* Quiz duration */}
        <p className="text-sm font-medium">{quiz.duration} minutes</p>

        {/* Start the quiz */}
        <Button variant="brand" size="sm" className="rounded-full px-6">
          Start
        </Button>
      </div>
    </div>
  );
}
