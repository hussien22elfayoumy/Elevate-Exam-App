import { z } from 'zod';

export const questionsFormSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      correct: z.string(),
    })
  ),

  // time: z.number(),
});

export type QuestionFormVelues = z.infer<typeof questionsFormSchema>;
