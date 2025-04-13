import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function QuizHoistroyCard() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-brand-light/60 p-4 shadow-sm">
      <div className="relative size-[85px]">
        <Image
          src="/assets/test.jpg"
          fill
          alt="html image"
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-lg font-medium">HTML Quiz</p>
        <p className="text-my-grey-500">11 questions</p>
        <p className="mt-2 text-sm text-brand">
          18 corrected answers in 12 min
        </p>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">20 minutes</p>
        <Button variant="brand" size="sm" className="rounded-full px-6">
          Answers
        </Button>
      </div>
    </div>
  );
}
