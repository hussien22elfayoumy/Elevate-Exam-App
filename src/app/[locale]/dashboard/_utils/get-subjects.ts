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
