import { Suspense } from 'react';
import { authOptions } from '@/auth';

import Search from './_components/search';
import Subjects from './_components/subjects';
import UserStats from './_components/user-stats';
import AddDiplomaDialog from './_components/add-diploma-dialog';
import { getServerSession } from 'next-auth';
import DiplomasSkeleton from '@/components/skeletons/features/diploma/diploma-list.skeleton';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  // Translation
  const t = await getTranslations();

  // Variables
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Search Diplomas */}
      <section className="mb-10 flex items-stretch gap-2">
        {/* Search */}
        <Search />
        {/* Add diploma */}
        {session?.user.role !== 'user' && <AddDiplomaDialog />}
      </section>

      {/* User stats section */}
      <section className="mb-8 flex flex-col items-center gap-8 rounded-xl bg-my-grey-150 p-5 shadow-lg shadow-my-grey-150 md:flex-row">
        <UserStats />
      </section>

      {/* All dimplomas section */}
      <section className="rounded-xl bg-my-grey-150 p-6">
        {/* Title */}
        <h2 className="mb-6 text-2xl font-medium text-brand">
          {t('diplomas')}
        </h2>

        {/* Subjects */}
        <Suspense fallback={<DiplomasSkeleton />}>
          <Subjects />
        </Suspense>
      </section>
    </>
  );
}
