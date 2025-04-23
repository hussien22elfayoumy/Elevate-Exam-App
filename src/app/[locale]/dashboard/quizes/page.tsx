import React, { Suspense } from 'react';
import Quizes from './_components/quizes';
import Search from '../_components/search';
import AddQuizDialog from './_components/add-quiz-dialog';

export default function Page() {
  const isAdmin = false;
  return (
    <>
      {/* Search Diplomas */}
      <section className="mb-10 flex items-stretch gap-2">
        <Search />
        {isAdmin && <AddQuizDialog />}
      </section>

      <section className="">
        {/* all quizes */}

        <Suspense fallback={<h2>Loading quizes</h2>}>
          <Quizes />
        </Suspense>
      </section>
    </>
  );
}
