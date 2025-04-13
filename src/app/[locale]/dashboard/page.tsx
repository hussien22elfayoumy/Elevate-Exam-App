import { Suspense } from 'react';

import Search from './_components/search';
import Subjects from './_components/subjects';
import UserStats from './_components/user-stats';

export default function Home() {
  return (
    <>
      <section className="mb-10">
        <Search />
      </section>

      <section className="mb-8 flex items-center gap-8 rounded-xl bg-my-grey-150 p-5 shadow-lg shadow-my-grey-150">
        <UserStats />
      </section>

      <section className="rounded-xl bg-my-grey-150 p-6">
        <h2 className="mb-6 text-2xl font-medium text-brand">Diplomas</h2>

        <Suspense fallback={<h2>Loading subjects</h2>}>
          <Subjects />
        </Suspense>
      </section>
    </>
  );
}
