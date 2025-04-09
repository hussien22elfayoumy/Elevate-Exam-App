import React from 'react';
import QuizCard from './quiz-card';

export default function Quizes() {
  return (
    <section className="px-4">
      <h2 className="mb-6 text-2xl font-medium text-brand">All Quizes</h2>
      <div className="space-y-4">
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    </section>
  );
}
