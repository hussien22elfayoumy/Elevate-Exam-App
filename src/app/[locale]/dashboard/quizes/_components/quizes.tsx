import React from 'react';
import QuizCard from './quiz-card';
import { getQuizes } from '../_utils/get-quizes';

export default async function Quizes() {
  const data = await getQuizes();

  return (
    <>
      {/* all quizes */}
      {data.exams.length > 0 ? (
        <div className="space-y-4">
          {data.exams.map((quiz) => (
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
