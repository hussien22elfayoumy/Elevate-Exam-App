'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  QuestionFormVelues,
  questionsFormSchema,
} from '@/lib/schemas/quiz-questions.schema';
import { cn } from '@/lib/utils/cn';
import { useCheckQuestions } from '../_hooks/use-check-questions';
import QuizTimer from './quiz-timer';
import UserScore from './user-score';

type QuizFormProps = {
  quiz: Quiz;
  questions: Question[];
};

type UserScoreRatio = {
  correct: number;
  wrong: number;
};

export default function QuizForm({ quiz, questions }: QuizFormProps) {
  // State
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [userScoreRatio, setUserScoreRatio] = useState<UserScoreRatio | null>(
    null
  );

  // Mutations
  const { checkQuesionsMutate, isPending, checkQuestionsError } =
    useCheckQuestions();

  // Variables
  const currentQuestion = questions[step];
  const isLastQuestion = step === questions.length - 1;

  // Form Register
  const { handleSubmit, getValues, control, setValue, watch } =
    useForm<QuestionFormVelues>({
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
    console.log(values);
    checkQuesionsMutate(values, {
      onSuccess: (data) => {
        console.log(data);
        setIsQuizSubmitted(true);
        setUserScoreRatio({ correct: data.correct, wrong: data.wrong });
      },
      onError: (err) => {
        console.log(err.message);
      },
    });
  }

  // Effects
  // useEffect(() => {
  //   const answer = getValues(`answers.${step}.correct`);
  //   setUserAnswer(answer);
  // }, [step, getValues]);

  return (
    <>
      {isQuizSubmitted ? (
        <div>
          <UserScore userScoreRatio={userScoreRatio!} />
          <div className="mt-6 flex items-center gap-2">
            {/* Prev btn */}
            <Button
              onClick={() => setIsQuizSubmitted(false)}
              variant="outline"
              className="h-10 rounded-full border-brand hover:bg-brand hover:text-white"
            >
              Back to quiz
            </Button>

            {/* Next btn */}
            <Button variant="brand" className="h-10 rounded-full">
              Show Results
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 flex justify-between">
            {/* Number of current question */}
            <p className="text-brand">
              Question {step + 1} Of {questions.length}
            </p>

            {/* Quiz Timer */}
            <QuizTimer
              duration={quiz.duration}
              onTimerChange={(date) =>
                // get the time passed in the quiz
                setValue('time', quiz.duration - date.getMinutes() + 1)
              }
            />
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
                disabled={isPending}
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
              disabled={step === 0 || isPending}
              onClick={() => {
                // get the prev user answer
                const answer = getValues(`answers.${step - 1}.correct`);

                // set this answer to the user answer state to show when he go back
                setUserAnswer(answer);

                // get to the prev step
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
              disabled={!userAnswer || isPending}
              onClick={() => {
                if (isLastQuestion) return;
                // get the next value
                const answer = getValues(`answers.${step + 1}.correct`);

                // if there is no next value empty the user answer
                if (!answer) setUserAnswer('');
                // if there is onw put it in user answer to save the state when he come back again
                else {
                  setUserAnswer(answer);
                }

                // go to the next step
                setStep((prevStep) => prevStep + 1);
              }}
              variant="brand"
              className="h-10 rounded-full"
            >
              {isLastQuestion ? 'Submit' : 'Next'}
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
