import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import QuizForm from './quiz-form';
import { getQuizQuestions } from '../../../_utils/get-quiz-questions';

type QuizFormDialogProps = {
  quiz: Quiz;
};

export default async function QuizFormDialog({ quiz }: QuizFormDialogProps) {
  const payload = await getQuizQuestions(quiz._id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand" size="sm" className="rounded-full px-6">
          Start
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-1 !rounded-xl border-my-grey-100 bg-my-grey-50">
        <DialogHeader>
          <DialogTitle>{quiz.title}</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        {!payload.success ? (
          <p className="text-center text-lg text-red-500">{payload.error}</p>
        ) : (
          <>
            {payload.data.questions.length > 0 ? (
              <QuizForm quiz={quiz} questions={payload.data.questions} />
            ) : (
              <p className="text-center text-lg text-red-500">
                No Quesions founded
              </p>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
