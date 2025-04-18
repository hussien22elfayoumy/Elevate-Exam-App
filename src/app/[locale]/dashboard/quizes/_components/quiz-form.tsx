'use client';
import { Progress } from '@/components/ui/progress';
import { LucideAlarmClock } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type QuizFormProps = {
  quiz: Quiz;
  questions: Question[];
};

const questionsFormSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      correct: z.string(),
    })
  ),

  // time: z.number(),
});

type QuestionFormVelues = z.infer<typeof questionsFormSchema>;

export default function QuizForm({ quiz, questions }: QuizFormProps) {
  // State
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  // Variables
  const currentQuestion = questions[step];
  const currentQuestionAnswers = questions[step].answers;

  const isLastQuestion = step === questions.length - 1;
  const isFirstQuestion = step === 0;

  // Form
  const { register, handleSubmit, getValues, control, setValue } = useForm({
    resolver: zodResolver(questionsFormSchema),
    defaultValues: {
      answers: questions.map(() => ({
        questionId: '',
        correct: '',
      })),
    },
  });

  // function

  function onSubmit(values: QuestionFormVelues) {
    console.log(values);
  }

  useEffect(() => {
    const answer = getValues(`answers.${step}.correct`);
    setUserAnswer(answer);
  }, [step, getValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <h3 className="mb-2 text-lg font-medium">{currentQuestion.question}</h3>

      <Controller
        name={`answers.${step}`}
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={userAnswer}
            name={currentQuestion._id}
            onValueChange={(value) => {
              setUserAnswer(value);
              field.onChange({
                questionId: currentQuestion._id,
                correct: value,
              });
            }}
          >
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
        )}
      />

      <div className="mt-6 flex items-start gap-2">
        <Button
          type="button"
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
          type={step < questions.length - 1 ? 'button' : 'submit'}
          disabled={!userAnswer}
          onClick={() => {
            if (step === questions.length - 1) return;
            setStep((prevStep) => prevStep + 1);
            setUserAnswer('');
          }}
          variant="brand"
          className="h-10 rounded-full"
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </Button>
      </div>
    </form>
  );
}
