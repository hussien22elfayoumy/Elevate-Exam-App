import { apiRequest } from '@/lib/utils/api-request';
import { getAccessToken } from '@/lib/utils/get-token';

export async function getQuizQuestions(quizId: string) {
  const accessToken = await getAccessToken();
  return await apiRequest<QuestionsResponse>({
    endpoint: `questions?exam=${quizId}`,
    method: 'GET',
    headers: { token: accessToken || '' },
  });
}
