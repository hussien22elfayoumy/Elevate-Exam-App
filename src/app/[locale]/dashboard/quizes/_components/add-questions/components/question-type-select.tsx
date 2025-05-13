'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function QuestionTypeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[220px] bg-my-grey-50 text-base">
        <SelectValue placeholder="Select Questions Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="radio" className="text-base hover:!bg-brand-light">
          Radio button
        </SelectItem>
        <SelectItem
          value="checkbox"
          className="text-base hover:!bg-brand-light"
        >
          Checkbox
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
