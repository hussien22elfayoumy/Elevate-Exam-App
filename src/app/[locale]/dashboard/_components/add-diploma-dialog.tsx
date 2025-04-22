import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default async function AddDiplomaDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand" className="h-auto w-fit rounded-xl px-6">
          Add Diploma
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-1 !rounded-xl border-my-grey-100 bg-my-grey-50">
        <DialogHeader>
          <DialogTitle>Add new diploma</DialogTitle>
          <DialogDescription />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
