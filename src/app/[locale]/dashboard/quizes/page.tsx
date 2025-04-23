import React, { Suspense } from 'react';
import { getServerSession } from 'next-auth';

import Quizes from './_components/quizes';
import Search from '../_components/search';
import AddQuizDialog from './_components/add-quiz-dialog';
import { authOptions } from '@/auth';
import QuizesSkeleton from '@/components/skeletons/quizes/quizes.skeleton';

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {/* Search Diplomas */}
      <section className="mb-10 flex items-stretch gap-2">
        <Search />
        {session?.user.role !== 'user' && <AddQuizDialog />}
      </section>

      <section className="">
        {/* all quizes */}

        <Suspense fallback={<QuizesSkeleton />}>
          <Quizes />
        </Suspense>
      </section>
    </>
  );
}
