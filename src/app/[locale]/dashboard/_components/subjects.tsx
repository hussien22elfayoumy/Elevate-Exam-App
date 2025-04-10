import { Link } from '@/i18n/navigation';
import { getSubjects } from '../_utils/get-subjects';
import SubjectCard from './subject-card';

export default async function Subjects() {
  const data = await getSubjects();

  return (
    <section className="px-4">
      <h2 className="mb-6 text-2xl font-medium text-brand">Diplomas</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.subjects.map((subject) => (
          <Link key={subject._id} href={`/dashboard/${subject._id}`}>
            <SubjectCard subject={subject} />
          </Link>
        ))}
      </div>
    </section>
  );
}
