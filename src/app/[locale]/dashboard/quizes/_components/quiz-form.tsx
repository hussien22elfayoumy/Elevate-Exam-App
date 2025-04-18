'use client';
import { Progress } from '@/components/ui/progress';
import { LucideAlarmClock } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type QuizFormProps = {
  quiz: Quiz;
  questions: Question[];
};

export default function QuizForm({ quiz, questions }: QuizFormProps) {
  // State
  const [step, setStep] = useState(0);

  // Variables
  const currentQuestion = questions[step]?.question;
  const currentQuestionAnswers = questions[step].answers;

  const isLastQuestion = step === questions.length - 1;
  const isFirstQuestion = step === 0;

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <p className="text-brand">
          Question {step + 1} Of {questions.length}
        </p>
        <p className="flex items-center gap-1">
          <LucideAlarmClock className="mb-1 size-5 text-brand" />
          <span className="text-green-500">{quiz.duration}</span>
        </p>
      </div>
      <Progress
        value={Math.ceil(((step + 1) / questions.length) * 100)}
        className="mb-6"
      />

      <h3 className="mb-2 text-lg font-medium">{currentQuestion}</h3>

      <RadioGroup>
        {currentQuestionAnswers.map((answer) => (
          <div
            key={answer.answer}
            className="flex items-center space-x-2 rounded-xl bg-brand-light px-4 py-5"
          >
            <RadioGroupItem value={answer.key} id={answer.key} />
            <Label htmlFor={answer.key}>{answer.answer}</Label>
          </div>
        ))}
      </RadioGroup>

      <div className="mt-6 flex items-start gap-2">
        <Button
          disabled={isFirstQuestion}
          onClick={() => {
            setStep((prevStep) => prevStep - 1);
          }}
          variant="outline"
          className="h-10 rounded-full border-brand hover:bg-brand hover:text-white"
        >
          Back
        </Button>
        <Button
          disabled={isLastQuestion}
          onClick={() => {
            setStep((prevStep) => prevStep + 1);
          }}
          variant="brand"
          className="h-10 rounded-full"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
