import { Link } from '@/i18n/navigation';
import { getSubjects } from '../_utils/get-subjects';
import SubjectCard from './subject-card';

export default async function Subjects() {
  const data = await getSubjects();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.subjects.map((subject) => (
        <Link key={subject._id} href={`/dashboard/${subject._id}`}>
          <SubjectCard subject={subject} />
        </Link>
      ))}
    </div>
  );
}
