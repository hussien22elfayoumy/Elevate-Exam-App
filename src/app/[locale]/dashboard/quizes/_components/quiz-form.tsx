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
} from '@/lib/schemes/quiz-questions.schema';
import { cn } from '@/lib/utils/cn';
import { useCheckQuestions } from '../_hooks/use-check-questions';
import QuizTimer from './quiz-timer';
import UserScore from './user-score';
import { toast } from '@/hooks/use-toast';

type QuizFormProps = {
  quiz: Quiz;
  questions: Question[];
};

export default function QuizForm({ quiz, questions }: QuizFormProps) {
  // State
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [userQuizResult, setUserQuizResult] = useState<QuizResultResponse>();

  // Mutations
  const { checkQuesionsMutate, isPending } = useCheckQuestions();

  // Variables
  const currentQuestion = questions[step];
  const isLastQuestion = step === questions.length - 1;

  // Form Register
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
    setValue,
    setError,
    reset,
  } = useForm<QuestionFormVelues>({
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
    checkQuesionsMutate(values, {
      onSuccess: (data) => {
        // show form user score result
        setIsQuizSubmitted(true);

        // set the user result
        setUserQuizResult(data);
      },
      onError: (err) => {
        toast({
          variant: 'destructive',
          description: (err as Error).message,
        });
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
          {/* User score stats */}
          <UserScore userScoreRatio={userQuizResult!} />

          <div className="mt-6 flex items-center gap-2">
            {/* Prev btn return to the quiz again without show answers */}
            <Button
              onClick={() => {
                reset();
                setIsQuizSubmitted(false);
                setStep(0);
                setUserAnswer('');
              }}
              variant="outline"
              className="h-10 rounded-full border-brand hover:bg-brand hover:text-white"
            >
              Try Quiz Again
            </Button>

            {/* show quiz results wrong answers and the correct */}
            <Button
              variant="brand"
              onClick={() => {
                // get all wrong answers
                userQuizResult?.WrongQuestions.forEach((quesion) => {
                  // get the index for each answer in form
                  getValues('answers').forEach((answer, i) => {
                    if (answer.questionId === quesion.QID) {
                      // set the form errors when there is match
                      setError(`answers.${i}`, {
                        message: quesion.correctAnswer,
                      });
                      return;
                    }
                  });
                });

                // retutn to the form again with answers
                setIsQuizSubmitted(false);
              }}
              className="h-10 rounded-full"
            >
              Show Wrong Answers
            </Button>
          </div>
        </div>
      ) : (
        // Quiz form
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
                    key={answer.key + answer.answer}
                    className={cn(
                      'flex items-center space-x-2 rounded-xl bg-brand-light px-4',
                      // mark all wrong ones
                      errors.answers?.[step] && 'bg-red-400',
                      // Mark the correct one
                      errors.answers?.[step]?.message === answer.key &&
                        'bg-green-400'
                    )}
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
