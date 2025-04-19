'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  QuestionFormVelues,
  questionsFormSchema,
} from '@/lib/schemas/quiz-questions.schema';
import { cn } from '@/lib/utils/cn';
import QuizTimer from './quiz-timer';

type QuizFormProps = {
  quiz: Quiz;
  questions: Question[];
};

export default function QuizForm({ quiz, questions }: QuizFormProps) {
  // State
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(new Date(0).setMinutes(quiz.duration));

  // Variables
  const currentQuestion = questions[step];
  const isLastQuestion = step === questions.length - 1;

  // Form Register
  const { handleSubmit, getValues, control } = useForm<QuestionFormVelues>({
    resolver: zodResolver(questionsFormSchema),
    defaultValues: {
      answers: questions.map(() => ({
        questionId: '',
        correct: '',
      })),
    },
  });

  // functions
  async function onSubmit(values: QuestionFormVelues) {
    const userQuizTime = quiz.duration - new Date(timer).getMinutes();
    const res = await fetch('/api/questions/check', {
      method: 'POST',
      body: JSON.stringify({ answers: values.answers, time: userQuizTime }),
    });
    const data = await res.json();
    console.log(data);
    setTimer(0);
  }

  // Effects
  useEffect(() => {
    const answer = getValues(`answers.${step}.correct`);
    setUserAnswer(answer);
  }, [step, getValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2 flex justify-between">
        {/* Number of current question */}
        <p className="text-brand">
          Question {step + 1} Of {questions.length}
        </p>

        {/* Quiz Timer */}
        <QuizTimer duration={quiz.duration} timer={timer} setTimer={setTimer} />
      </div>

      {/* Nubmer of Quesiton visualize */}
      <ul className="mb-6 mt-4 flex items-center justify-evenly">
        {Array.from({ length: questions.length }).map((_, i) => (
          <li
            key={i}
            className={cn(
              'size-2 rounded-full bg-my-grey-400',
              step >= i && 'bg-brand'
            )}
          ></li>
        ))}
      </ul>

      {/* Question  title */}
      <h3 className="mb-3 h-[60px] text-lg font-medium">
        {currentQuestion.question}
      </h3>

      {/* Radio Group Controller */}
      <Controller
        name={`answers.${step}`}
        control={control}
        render={({ field }) => (
          // Radio group
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
            {currentQuestion.answers.map((answer) => (
              <div
                key={answer.answer}
                className="flex items-center space-x-2 rounded-xl bg-brand-light px-4"
              >
                {/* Radio Item indicator */}
                <RadioGroupItem value={answer.key} id={answer.key} />

                {/* Radio Item label */}
                <Label className="grow py-5" htmlFor={answer.key}>
                  {answer.answer}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />

      <div className="mt-6 flex items-start gap-2">
        {/* Prev btn */}
        <Button
          type="button"
          disabled={step === 0}
          onClick={() => {
            setStep((prevStep) => prevStep - 1);
          }}
          variant="outline"
          className="h-10 rounded-full border-brand hover:bg-brand hover:text-white"
        >
          Back
        </Button>

        {/* Next btn */}
        <Button
          type={isLastQuestion ? 'submit' : 'button'}
          disabled={!userAnswer}
          onClick={() => {
            if (isLastQuestion) return;
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
