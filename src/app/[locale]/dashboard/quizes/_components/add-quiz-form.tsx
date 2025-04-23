'use client';
import { IoIosAdd } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AddQuizForm() {
  return (
    <form className="flex flex-col">
      <div className="flex items-center justify-between">
        {/* quiz photo */}
        <div className="space-y-2">
          <Label htmlFor="quizImage">Add Photo</Label>
          {/* The label act like actual input case of htmlFor */}
          <Label
            htmlFor="quizImage"
            className="flex h-10 cursor-pointer items-center justify-center rounded-xl border border-my-grey-200 bg-my-grey-150 text-brand hover:border-brand hover:bg-my-grey-200"
          >
            <IoIosAdd className="size-8" />
          </Label>
          <Input id="quizImage" type="file" className="hidden" />
        </div>
        {/* quiz name */}
        <div className="space-y-2">
          <Label htmlFor="quizTime">Time</Label>
          <Input id="quizTime" type="text" className="w-10 rounded-xl" />
        </div>

        {/* quiz name */}
        <div className="space-y-2">
          <Label htmlFor="quizName">Quiz Name</Label>
          <Input id="quizName" type="text" className="rounded-xl" />
        </div>
        {/* quiz description */}
        <div className="space-y-2">
          <Label htmlFor="quizDescription">Description</Label>
          <Input id="quizDescription" type="text" className="rounded-xl" />
        </div>
      </div>

      {/* Form submit */}
      <Button variant="brand" className="mt-5 w-fit self-end">
        Add Quiz
      </Button>
    </form>
  );
}
