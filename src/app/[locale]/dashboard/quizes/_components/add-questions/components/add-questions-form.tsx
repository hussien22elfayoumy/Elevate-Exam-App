import { Label } from '@/components/ui/label';
import QuestionTypeSelect from './question-type-select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AddQuestionsForm() {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="flex-1 text-lg font-semibold text-brand">Add Question</p>
        <QuestionTypeSelect />
      </div>

      <div className="space-y-1">
        <Label htmlFor="question">Question</Label>
        <Input id="question" type="text" className="rounded-xl" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="answer-1">Answer 1</Label>
        <Input id="answer-1" type="text" className="rounded-xl" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="answer-2">Answer 2</Label>
        <Input id="answer-2" type="text" className="rounded-xl" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="answer-3">Answer 3</Label>
        <Input id="answer-3" type="text" className="rounded-xl" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="answer-4">Answer 4</Label>
        <Input id="answer-4" type="text" className="rounded-xl" />
      </div>

      {/* Form submit */}
      <Button variant="brand" className="mt-5 w-fit self-end">
        Add Question
      </Button>
    </form>
  );
}
