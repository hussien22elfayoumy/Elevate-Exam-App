import { apiRequest } from '@/lib/utils/api-request';
import { getAccessToken } from '@/lib/utils/get-token';

export async function getQuizes() {
  const accessToken = await getAccessToken();

  return await apiRequest<QuizsResponse>({
    endpoint: 'exams',
    method: 'GET',
    headers: {
      token: accessToken || '',
    },
  });
}
