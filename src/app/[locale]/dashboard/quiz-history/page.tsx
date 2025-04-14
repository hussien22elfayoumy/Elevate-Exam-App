import QuizHistroyList from './_components/quiz-history-list';

export default function Page() {
  return (
    <>
      <section className="px-4">
        {/* Title */}
        <h2 className="mb-6 text-2xl font-medium text-brand">Quiz Histroy</h2>

        {/* Quiz History Cards */}
        <QuizHistroyList />
      </section>
    </>
  );
}
