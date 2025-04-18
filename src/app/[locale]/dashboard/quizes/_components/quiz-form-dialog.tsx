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
import { apiRequest } from '@/lib/utils/api-request';
import { getAccessToken } from '@/lib/utils/get-token';

type QuizFormDialogProps = {
  quiz: Quiz;
};

export default async function QuizFormDialog({ quiz }: QuizFormDialogProps) {
  const accessToken = await getAccessToken();
  const questions = await apiRequest<QuestionsResponse>({
    endpoint: `questions?exam=${quiz._id}`,
    method: 'GET',
    headers: { token: accessToken },
  });

  console.log(questions);
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

        <QuizForm quiz={quiz} questions={questions.questions} />
      </DialogContent>
    </Dialog>
  );
}
