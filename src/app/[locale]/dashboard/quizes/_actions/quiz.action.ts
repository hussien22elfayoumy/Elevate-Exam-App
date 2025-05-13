'use server';
import { QuestionFormVelues } from '@/lib/schemes/quiz-questions.schema';
import { apiRequest } from '@/lib/utils/api-request';
import { getAccessToken } from '@/lib/utils/get-token';

export async function checkQuestions(values: QuestionFormVelues) {
  const accessToken = await getAccessToken();
  return await apiRequest<QuizResultResponse>({
    endpoint: 'questions/check',
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      token: accessToken || '',
    },
  });
}
