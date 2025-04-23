'use client';
import { IoIosAdd } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AddDiplomaForm() {
  return (
    <form className="flex flex-col">
      <div className="flex items-center justify-between">
        {/* Diploma photo */}
        <div className="space-y-2">
          <Label htmlFor="diplomaImage">Add Photo</Label>
          {/* The label act like actual input case of htmlFor */}
          <Label
            htmlFor="diplomaImage"
            className="flex h-10 cursor-pointer items-center justify-center rounded-xl border border-my-grey-200 bg-my-grey-150 text-brand hover:border-brand hover:bg-my-grey-200"
          >
            <IoIosAdd className="size-8" />
          </Label>
          <Input id="diplomaImage" type="file" className="hidden" />
        </div>
        {/* Diploma name */}
        <div className="space-y-2">
          <Label htmlFor="diplomaName">Diploma Name</Label>
          <Input id="diplomaName" type="text" className="rounded-xl" />
        </div>
        {/* Diploma description */}
        <div className="space-y-2">
          <Label htmlFor="diplomaDescription">Description</Label>
          <Input id="diplomaDescription" type="text" className="rounded-xl" />
        </div>
      </div>

      {/* Form submit */}
      <Button variant="brand" className="mt-5 w-fit self-end">
        Add dibloma
      </Button>
    </form>
  );
}
