import { Link } from '@/i18n/navigation';
import { getSubjects } from '../_utils/get-subjects';
import SubjectCard from './subject-card';

export default async function Subjects() {
  // Fetch subjects
  const data = await getSubjects();

  return (
    <>
      {data.subjects.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.subjects.map((subject) => (
            <Link key={subject._id} href={`/dashboard/quizes`}>
              <SubjectCard subject={subject} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-red-500">
          No Diplomas found
        </p>
      )}
    </>
  );
}
