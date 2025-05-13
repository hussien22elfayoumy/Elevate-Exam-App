import React from 'react';
import { getQuizes } from '../_utils/get-quizes';
import QuizCard from './quiz-card';

export default async function Quizes() {
  const payload = await getQuizes();

  if (!payload.success)
    return (
      <p className="text-center text-lg font-semibold text-red-500">
        {payload.error}
      </p>
    );

  return (
    <>
      {/* all quizes */}
      {payload.data.exams.length > 0 ? (
        <div className="space-y-4">
          {payload.data.exams.map((quiz) => (
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
