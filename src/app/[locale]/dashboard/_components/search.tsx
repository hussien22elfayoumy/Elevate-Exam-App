import { Input } from '@/components/ui/input';
import React from 'react';

export default function Search() {
  return (
    <Input
      className="h-14 rounded-xl shadow-lg shadow-my-grey-150"
      placeholder="Search quiz"
    />
  );
}
