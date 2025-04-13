import { authOptions } from '@/auth';
import { apiRequest } from '@/lib/utils/api-request';
import { getServerSession } from 'next-auth';

export async function getQuizes() {
  const session = await getServerSession(authOptions);

  return await apiRequest<QuizsResponse>({
    endpoint: 'exams',
    method: 'GET',
    headers: {
      token: session?.accessToken!,
    },
  });
}
