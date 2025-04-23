'use client';

import { Button } from '@/components/ui/button';

export default function ErrorComponent({ error, reset }: ErrorProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8">
      {/* Headline */}
      <h1 className="text-5xl font-bold text-red-500">Something went wrong!</h1>

      {/* Description */}
      <p>{error.message}</p>

      {/* Action */}
      <Button variant="brand" className="w-fit" onClick={reset}>
        Try again
      </Button>
    </section>
  );
}
