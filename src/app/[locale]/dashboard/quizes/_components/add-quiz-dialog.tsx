import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AddQuizForm from './add-quiz-form';

export default async function AddQuizDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand" className="h-auto w-fit rounded-xl px-6">
          Add Quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl gap-3 !rounded-xl border-my-grey-100 bg-my-grey-50">
        <DialogHeader>
          <DialogTitle className="text-brand">Add New Quiz</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <AddQuizForm />
      </DialogContent>
    </Dialog>
  );
}
