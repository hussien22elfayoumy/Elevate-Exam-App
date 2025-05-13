import React, { Suspense } from 'react';
import { getServerSession } from 'next-auth';

import Quizes from './_components/quizes';
import Search from '../_components/search';
import AddQuizDialog from './_components/add-quiz';
import { authOptions } from '@/auth';
import QuizesSkeleton from '@/components/skeletons/features/quiz/quiz-list.skeleton';

export default async function Page() {
  // Variables
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Search Diplomas */}
      <section className="mb-10 flex items-stretch gap-2">
        {/* Search */}
        <Search />

        {/* Add quiz */}
        {session?.user.role !== 'user' && <AddQuizDialog />}
      </section>

      {/* Quizes */}
      <section>
        <Suspense fallback={<QuizesSkeleton />}>
          <Quizes />
        </Suspense>
      </section>
    </>
  );
}
