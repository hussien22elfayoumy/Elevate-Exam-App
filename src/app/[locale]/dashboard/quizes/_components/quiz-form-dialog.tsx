import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getQuizQuestions } from '../_utils/get-quiz-questions';
import QuizForm from './quiz-form';

type QuizFormDialogProps = {
  quiz: Quiz;
};

export default async function QuizFormDialog({ quiz }: QuizFormDialogProps) {
  const { payload } = await getQuizQuestions(quiz._id);

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

        {Boolean(payload?.questions.length) ? (
          <QuizForm quiz={quiz} questions={payload!.questions} />
        ) : (
          <p className="text-center text-lg text-red-500">
            No Quesions founded
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
