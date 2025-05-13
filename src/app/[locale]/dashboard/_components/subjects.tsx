import { Link } from '@/i18n/navigation';
import SubjectCard from './subject-card';
import { apiRequest } from '@/lib/utils/api-request';
import { getAccessToken } from '@/lib/utils/get-token';

export async function getSubjects() {
  const accessToken = await getAccessToken();

  return await apiRequest<SubjectsResponse>({
    endpoint: 'subjects',
    method: 'GET',
    headers: {
      token: accessToken || '',
    },
  });
}

export default async function Subjects() {
  // Variables
  const payload = await getSubjects();

  if (!payload.success)
    return (
      <p className="text-center text-lg font-semibold text-red-500">
        {payload.error}
      </p>
    );

  return (
    <>
      {payload.data.subjects.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {payload.data.subjects.map((subject) => (
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
