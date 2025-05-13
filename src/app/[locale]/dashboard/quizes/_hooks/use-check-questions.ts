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
      const { payload, error } = await checkQuestions(values);

      if (error) throw new Error(error.message);

      return payload;
    },
  });

  return { isPending, checkQuestionsError, checkQuesionsMutate };
}
