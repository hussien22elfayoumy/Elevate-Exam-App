import QuizHistoryCard from './quiz-histroy-card';

export default function QuizHistroyList() {
  return (
    <section className="px-4">
      {/* Title */}
      <h2 className="mb-6 text-2xl font-medium text-brand">Quiz Histroy</h2>

      {/* Quiz History Cards */}
      <div className="space-y-4">
        <QuizHistoryCard />
      </div>
    </section>
  );
}
