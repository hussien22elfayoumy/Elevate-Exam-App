import { useMutation } from '@tanstack/react-query';
import { checkQuestions } from '../_actions/quiz.action';
import { QuestionFormVelues } from '@/lib/schemes/quiz-questions.schema';

export function useCheckQuestions() {
  const {
    isPending,
    error: checkQuestionsError,
    mutate: checkQuesionsMutate,
  } = useMutation({
    mutationFn: async (values: QuestionFormVelues) => {
      const payload = await checkQuestions(values);

      if (!payload.success) throw new Error(payload.error);

      return payload.data;
    },
  });

  return { isPending, checkQuestionsError, checkQuesionsMutate };
}
