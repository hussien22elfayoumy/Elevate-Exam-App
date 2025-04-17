import { Progress } from '@/components/ui/progress';
import { LucideAlarmClock } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

type QuizFormProps = {
  quiz: Quiz;
};

export default function QuizForm({ quiz }: QuizFormProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <p className="text-brand">Question 1 Of {quiz.numberOfQuestions}</p>
        <p className="flex items-center gap-1">
          <LucideAlarmClock className="mb-1 size-5 text-brand" />
          <span className="text-green-500">{quiz.duration}</span>
        </p>
      </div>
      <Progress value={25} className="mb-6" />

      <h3 className="mb-2 text-lg font-medium">
        Exercitationem pariatur quae facere vel id est illo velit aut.
      </h3>

      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2 rounded-xl bg-brand-light px-4 py-5">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-brand-light px-4 py-5">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-brand-light px-4 py-5">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-brand-light px-4 py-5">
          <RadioGroupItem value="compact2" id="r4" />
          <Label htmlFor="r4">Compact2</Label>
        </div>
      </RadioGroup>

      <div className="mt-6 flex items-start gap-2">
        <Button
          variant="outline"
          className="h-10 rounded-full border-brand hover:bg-brand hover:text-white"
        >
          Back
        </Button>
        <Button variant="brand" className="h-10 rounded-full">
          Next
        </Button>
      </div>
    </div>
  );
}
