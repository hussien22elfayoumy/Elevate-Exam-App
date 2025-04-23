import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AddQuestionsForm from './add-questions-form';
type AddQuestionsDialogProps = {
  quiz: Quiz;
};

export default async function AddQuestionsDialog({
  quiz,
}: AddQuestionsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand" className="h-auto w-fit rounded-xl px-6">
          Add Questions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl gap-3 !rounded-xl border-my-grey-100 bg-my-grey-50">
        <DialogHeader>
          <DialogTitle>{quiz.title}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <AddQuestionsForm />
      </DialogContent>
    </Dialog>
  );
}
