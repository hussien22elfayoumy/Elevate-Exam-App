import { authOptions } from '@/auth';
import { apiRequest } from '@/lib/utils/api-request';
import { getServerSession } from 'next-auth';

export async function getSubjects() {
  const session = await getServerSession(authOptions);

  return await apiRequest<SubjectsResponse>({
    endpoint: 'subjects',
    method: 'GET',
    headers: {
      token: session?.accessToken!,
    },
  });
}
