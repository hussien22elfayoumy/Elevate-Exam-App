import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AddDiplomaForm from './add-diploma-form';

export default async function AddDiplomaDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand" className="h-auto w-fit rounded-xl px-6">
          Add Diploma
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl gap-3 !rounded-xl border-my-grey-100 bg-my-grey-50">
        <DialogHeader>
          <DialogTitle className="text-brand">Add new diploma</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <AddDiplomaForm />
      </DialogContent>
    </Dialog>
  );
}
