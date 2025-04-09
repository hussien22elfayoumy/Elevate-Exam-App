import DiplomaCard from './diploma-card';

export default function Diplomas() {
  return (
    <section className="px-4">
      <h2 className="mb-6 text-2xl font-medium text-brand">Diplomas</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DiplomaCard />
      </div>
    </section>
  );
}
