import { useMutation } from '@tanstack/react-query';
import { checkQuestions } from '../_actions/quiz.action';

export function useCheckQuestions() {
  const {
    isPending,
    error: checkQuestionsError,
    mutate: checkQuesionsMutate,
  } = useMutation({
    mutationFn: checkQuestions,
  });

  return { isPending, checkQuestionsError, checkQuesionsMutate };
}
