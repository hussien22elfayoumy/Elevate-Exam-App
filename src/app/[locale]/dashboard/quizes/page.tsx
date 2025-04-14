import React, { Suspense } from 'react';
import Quizes from './_components/quizes';

export default function Page() {
  return (
    <>
      <section className="px-4">
        {/* Title */}
        <h2 className="mb-6 text-2xl font-medium text-brand">All Quizes</h2>

        {/* all quizes */}

        <Suspense fallback={<h2>Loading quizes</h2>}>
          <Quizes />
        </Suspense>
      </section>
    </>
  );
}
