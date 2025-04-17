import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LucideAlarmClock } from 'lucide-react';
import QuizForm from './quiz-form';

type QuizFormDialogProps = {
  quiz: Quiz;
};

export default function QuizFormDialog({ quiz }: QuizFormDialogProps) {
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

        <QuizForm quiz={quiz} />
      </DialogContent>
    </Dialog>
  );
}
