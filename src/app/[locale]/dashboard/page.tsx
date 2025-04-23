import { Suspense } from 'react';
import { authOptions } from '@/auth';

import Search from './_components/search';
import Subjects from './_components/subjects';
import UserStats from './_components/user-stats';
import AddDiplomaDialog from './_components/add-diploma-dialog';
import { getServerSession } from 'next-auth';
import DiplomasSkeleton from '@/components/skeletons/diplomas/diplomas.skeleton';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {/* Search Diplomas */}
      <section className="mb-10 flex items-stretch gap-2">
        <Search />
        {session?.user.role !== 'user' && <AddDiplomaDialog />}
      </section>

      {/* User stats section */}
      <section className="mb-8 flex flex-col items-center gap-8 rounded-xl bg-my-grey-150 p-5 shadow-lg shadow-my-grey-150 md:flex-row">
        <UserStats />
      </section>

      {/* All dimplomas section */}
      <section className="rounded-xl bg-my-grey-150 p-6">
        <h2 className="mb-6 text-2xl font-medium text-brand">Diplomas</h2>
        <Suspense fallback={<DiplomasSkeleton />}>
          <Subjects />
        </Suspense>
      </section>
    </>
  );
}
