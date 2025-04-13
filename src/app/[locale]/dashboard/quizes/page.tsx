import React, { Suspense } from 'react';
import Quizes from './_components/quizes';

export default function Page() {
  return (
    <>
      <Suspense fallback={<h2>Loading quizes</h2>}>
        <Quizes />
      </Suspense>
    </>
  );
}
