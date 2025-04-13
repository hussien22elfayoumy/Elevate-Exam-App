import React from 'react';
import QuizCard from './quiz-card';
import { getQuizes } from '../_utils/get-quizes';

export default async function Quizes() {
  const data = await getQuizes();

  return (
    <section className="px-4">
      <h2 className="mb-6 text-2xl font-medium text-brand">All Quizes</h2>
      <div className="space-y-4">
        {data.exams.map((quiz) => (
          <QuizCard key={quiz._id} quiz={quiz} />
        ))}
      </div>
    </section>
  );
}
