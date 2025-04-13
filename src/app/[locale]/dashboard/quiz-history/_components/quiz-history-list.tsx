import QuizHoistroyCard from './quiz-histroy-card';

export default function QuizHistroyList() {
  return (
    <section className="px-4">
      <h2 className="mb-6 text-2xl font-medium text-brand">Quiz Histroy</h2>
      <div className="space-y-4">
        <QuizHoistroyCard />
      </div>
    </section>
  );
}
