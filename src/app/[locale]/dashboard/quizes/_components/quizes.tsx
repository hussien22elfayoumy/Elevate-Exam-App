import React from 'react';
import QuizCard from './quiz-card';
import { getQuizes } from '../_utils/get-quizes';

export default async function Quizes() {
  const { payload } = await getQuizes();

  return (
    <>
      {/* all quizes */}
      {Boolean(payload?.exams.length) ? (
        <div className="space-y-4">
          {payload!.exams.map((quiz) => (
            <QuizCard key={quiz._id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-red-500">
          No Quizes found
        </p>
      )}
    </>
  );
}
